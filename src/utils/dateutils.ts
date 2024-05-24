function formatDateToYearMonth(dateString: string): string {
    const date = new Date(dateString);
    
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    
    return `${year}.${month}`;
}

export { formatDateToYearMonth };