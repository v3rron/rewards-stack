class Api::V1::RedemptionsController < ApplicationController
  before_action :set_redemption, only: :show

  # GET /redemptions
  def index
    @redemptions = Redemption.all

    render json: @redemptions
  end

  # GET /redemptions/1
  def show
    render json: @redemption
  end

  # POST /redemptions
  def create
    @redemption = Redemption.new(create_redemption_params)

    if @redemption.save
      render json: @redemption, status: :created, location: polymorphic_url([:api, :v1, @redemption])
    else
      render json: @redemption.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_redemption
      @redemption = Redemption.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def create_redemption_params
      params.expect(redemption: [:user_id, :product_id])
    end
end
