module Api
  module V1
    class CurrenciesController < ApplicationController
      def search
        @currencies = Currency.where("LOWER(name) LIKE ?", "%#{params[:search].to_s.downcase}%")
        render json: { currencies: @currencies }
      end

      # Takes in the currency id and the amount owned
      # Returns final calculations
      def calculate
        amount = params[:amount]
        render json: {
          currency: currency,
          current_price: currency.current_price,
          amount: amount,
          value: currency.calculate_value(amount),
        }
      end

      private

      def currency
        @currency ||= Currency.find(params[:id])
      end
    end
  end
end
