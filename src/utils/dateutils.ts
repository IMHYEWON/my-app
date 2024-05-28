function formatDateToYearMonth(dateString: string): string {
    const date = new Date(dateString);
    
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    
    return `${year}.${month}`;
}

function calculateDay() {
    const startDate = new Date('2024-03-31');
    const date = new Date();
    const diff = date.getTime() - startDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}
export { formatDateToYearMonth, calculateDay};