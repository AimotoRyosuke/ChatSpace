class MessagesController < ApplicationController
  


  def index
    @message = Message.includes(:group, :user)
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