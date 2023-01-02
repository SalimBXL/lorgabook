class Api::V1::ArticlesController < ApplicationController
  before_action :set_article, only: %i[ show update destroy ]

  # GET /articles
  def index
    @articles = Article.order(created_at: :desc)
    @notReviewed = Article.where(reviewed: [false, nil]).size
    @notCompleted = Article.where(completed: [false, nil]).length
    @fully_reviewed = Article.where(reviewed: true, completed: true).size
    @total = Article.all.size

    articles = Array.new
    @articles.each do |article|
      comments = Comment.where(article: article.id).order(created_at: :desc)
      articles << {
        article: article,
        comments: comments
      }
    end

    render json: {
      not_reviewed: @notReviewed,
      not_completed: @notCompleted,
      fully_reviewed: @fully_reviewed,
      articles_total: @total,
      articles: articles
    }
  end

  # GET /articles/1
  def show
    render json: @article
  end

  # POST /articles
  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article, status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:title, :text, :author, :category, :classe, :groupe, :reviewer, :reviewed, :completed)
    end
end
