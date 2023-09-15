export const getPagination = (page: number, size: number) => {
    
    const limit = size ? + size : 3;
    const offset = (page - 1) * limit;
    
    return { limit, offset };
};

export const getPagingData = (entities: any, page: number, limit: number) => {
    const { count: totalItems, rows: data } = entities;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, data, totalPages, currentPage };
};