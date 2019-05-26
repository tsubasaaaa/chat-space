class Api::MessagesController < ApplicationController
  def index
    @messages = Message.new
    @messages = Message.where("id > ?", params[:id])
    respond_to do |format|
      format.html
      format.json 
    end
  end

  private

  def message_params
    params.require(:message).permit(:id)
  end
end