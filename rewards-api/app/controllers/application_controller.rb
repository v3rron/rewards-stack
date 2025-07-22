class ApplicationController < ActionController::API
  def status
    render json: { status: :ok }, status: :ok
  end
end
