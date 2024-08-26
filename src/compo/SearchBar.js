import React, { useState } from 'react'
import { Row,Col,Form, Button } from 'react-bootstrap'
import { useDispatch} from 'react-redux'

const SearchBar = () => {
  const [searchContack,setSearchContack] = useState('')
  const dispatch = useDispatch()
  const searchName = () => {
    console.log("검색값",searchContack)
    if(searchContack !== ""){
      dispatch({type:"SEARCH_LIST",payload:{searchContack}})
    }
  }
  return (
    <Row className='search-box'>
        <Col lg={8}>
            <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event)=>setSearchContack(event.target.value)} />
        </Col>
        <Col lg={2}>
            <Button onClick={searchName}>찾기</Button>
        </Col>
    </Row>
  )
}

export default SearchBar