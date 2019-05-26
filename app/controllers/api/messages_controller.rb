class Api::MessagesController < ApplicationController
  def index
    @messages = Message.new
    @messages = Message.where("id > ?", params[:last_message_id]).where(group_id: params[:group_id])
    # @messages = @group.messages.includes(:user)
    # @members = @group.users
    respond_to do |format|
      format.html
      format.json 
    end
  end
end