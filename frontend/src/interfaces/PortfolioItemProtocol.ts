export interface PortfolioItemProtocol {
    item: PortfolioItemProtocolCurrency
}

interface PortfolioItemProtocolCurrency {
    name: string
    current_price: number
    amount: number
    value: number
    currency: { name: string }
} 
