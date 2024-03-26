// TableComponent.js


function TableComponent({ columns, data }) {
    return (
        <div className="md:mt-8 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 whitespace-nowrap">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} scope="col" className="px-6 py-5">
                                {column.text}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-b-gray-700 dark:bg-gray-800 hover:bg-[#2E374A] dark:hover:bg-gray-600">
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    {column.render ? column.render(row) : row[column.dataKey]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableComponent;
