class MessagesController < ApplicationController
  


  def index
  end

  def new
    @message = Message.new
  end

  def create
    Message.create(message_params)
  end

  private
  def message_params
  end

end