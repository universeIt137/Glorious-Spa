import React from 'react';

const RelatedSearch = ({relatedSearch}) => {
    return (
        <div>
            <h1 className='text-center text-red-600 font-bold text-[24px]'>Related Search</h1>
            <p className="lg:w-3/4 mx-auto font-bold px-2">
                {relatedSearch}
            </p>
        </div>
    );
};

export default RelatedSearch;