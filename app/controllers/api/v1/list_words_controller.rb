class Api::V1::ListWordsController < ApplicationController

  def index
    list = List.find(params[:list_id])
    infinitives = list.infinitives
    nouns = list.nouns
    render json: {nouns: nouns, infinitves: infinitives}
  end
end
