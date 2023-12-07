export interface Page<T> {
    content: T[];
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
    // pageable: {
    //   sort: {
    //     sorted: boolean;
    //     unsorted: boolean;
    //     empty: boolean;
    //   };
    //   offset: number;
    //   pageNumber: number;
    //   pageSize: number;
    //   paged: boolean;
    //   unpaged: boolean;
    // };
    // last: boolean;
    // sort: {
    //   sorted: boolean;
    //   unsorted: boolean;
    //   empty: boolean;
    // };
    // numberOfElements: number;
    // first: boolean;
    // empty: boolean;
}