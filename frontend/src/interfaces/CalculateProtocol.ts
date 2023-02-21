export interface CalculateProtocol {
    handleChange: (e: React.FormEvent) => void
    handleSubmit: (e: React.FormEvent) => void
    amount: number
    active_currency: { name: string }
}
