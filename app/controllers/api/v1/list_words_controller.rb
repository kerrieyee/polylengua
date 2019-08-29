class Api::V1::ListWordsController < ApplicationController
  respond_to :json

  def index
    list = List.find(params[:list_id])
    infinitives = list.infinitives
    verb_conjugations = list.verb_conjugations
    nouns = list.nouns
    render json: {nouns: nouns, verb_conjugations: verb_conjugations, infinitves: infinitives}
  end
end
