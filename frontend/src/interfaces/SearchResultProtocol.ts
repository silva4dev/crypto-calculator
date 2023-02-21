export interface SearchResultProtocol {
    handleSelect: (e: React.MouseEvent) => void
    currency: SearchResultCurrencyProtocol
}

interface SearchResultCurrencyProtocol {
    id: number
    name: string
    currency_symbol: string
}
