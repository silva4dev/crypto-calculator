class Currency < ApplicationRecord
  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end

  def current_price
    url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest"
    headers = {
      "Accept": "application/json",
      "X-CMC_PRO_API_KEY": ENV["PRO_API_KEY"],
    }
    query = {
      "slug": self.slug,
    }
    request = HTTParty.get(
      url,
      query: query,
      headers: headers,
    )
    response = JSON.parse(request.body)["data"].values[0]["quote"]["USD"]["price"]
  end
end
