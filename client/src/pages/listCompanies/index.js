import React from 'react'
import { Table, Container } from 'react-bootstrap'
import './list-companies.scss'
import { useQuery } from 'react-query'
import { API } from '../../config/api/api'
const ListCompanies = () => {
    let { data: listCompanies } = useQuery('ListcompaniesCaches', async () => {
        const response = await API.get('/companies')
        return response.data.data

    })
    // console.log(companies);
    return (
        <Container className='mb-5'>
            <div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>User</th>
                            <th>Name</th>
                            <th>Variant</th>
                            <th>Status</th>
                            <th>Start Date</th>
                            <th>Expired Date</th>

                        </tr>
                    </thead>

                    <tbody>
                        {listCompanies?.map((data, index) => (

                            <tr>
                                <td key={index}>{index + 1}</td>
                                <td>{data?.user?.className}</td>
                                <td>{data?.name}</td>
                                <td>{data?.start_date}</td>
                                <td>{data?.expired_date}</td>
                                <td>{data?.variants?.name}</td>
                                <td>@{data?.status}</td>
                            </tr>
                        ))}


                    </tbody>
                </Table>
            </div>

        </Container>

    )
}

export default ListCompanies