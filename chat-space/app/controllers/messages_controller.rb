class MessagesController < ApplicationController
  before_action :set_group

  def index
    @messages = @group.messages.includes(:user)
    @message = Message.new
  end


  def create
    @message = @group.messages.create(message_params)
    # if @message.save
    #   redirect_to group_messages_path(@group), notice: 'メッセージが送信されました'
    # else
    #   @messages =@group.messages.includes(:user)
    #   # binding.pry
    #   flash.now[:alert] = 'メッセージを入力してください。'
    #   render :index
    # end
    respond_to do |format|
      format.html { redirect_to group_messages_path(params[:group_id])}
      format.json {@message}
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

end