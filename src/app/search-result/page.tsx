'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import blogData from '@/data/Blog.json'; // Assuming you want to use blog data
import BlogItem from '@/components/Blog/BlogItem';
import HandlePagination from '@/components/Other/HandlePagination';

const SearchResult = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 9; // Number of blog items per page
    const offset = currentPage * productsPerPage;
    const router = useRouter();
    const handleSearch = (value: string) => {
        router.push(`/search-result?query=${value}`);
        setSearchKeyword('');
    };
    
    const searchParams = useSearchParams();
    let query = searchParams.get('query') as string;
    
    // Default query if none is provided
    if (!query) {
        query = 'Electronicsboom';
    }

    // Filter blog data based on the search query
    let filteredData = blogData.filter((blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.description.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredData.length === 0) {
        filteredData = [{
            id: 'no-data',
            category: 'no-data',
            tag: 'no-data',
            title: 'No results found',
            date: 'no-data',
            author: 'no-data',
            avatar: 'no-data',
            thumbImg: '',
            coverImg: '',
            shortDesc: 'No blog posts match your search criteria.',
            slug: 'no-data'
        }];
    }

    const pageCount = Math.ceil(filteredData.length / productsPerPage);
    if (pageCount === 0) {
        setCurrentPage(0);
    }

    const currentProducts = filteredData.slice(offset, offset + productsPerPage);
    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };

    return (
        <>

            <div className='blog grid md:py-20 py-10'>
                <div className="container">
                    <div className="heading flex flex-col items-center mb-6 pt-10">
                        <div className="heading4 text-center">Found {filteredData.length} results for <strong>'{query}'</strong></div>
                    </div>
                    <div className="list-blog grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                        {currentProducts.map(item => (
                            item.id === 'no-data' ? (
                                <div key={item.id} className="no-data-product">No blog posts match the selected criteria.</div>
                            ) : (
                                <BlogItem key={item.id} data={item} type='style-one' />
                            )
                        ))}
                    </div>
                    {pageCount > 1 && (
                        <div className="list-pagination flex items-center justify-center md:mt-10 mt-7">
                            <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                        </div>
                    )}
                </div>
            </div>
    
        </>
    );
};

export default SearchResult;