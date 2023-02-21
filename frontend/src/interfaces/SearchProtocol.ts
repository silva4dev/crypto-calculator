export interface SearchProtocol {
    handleChange: (e: React.FormEvent) => void
    handleSelect: (e: React.MouseEvent) => void
    name: string
    searchResults: any[]
}
