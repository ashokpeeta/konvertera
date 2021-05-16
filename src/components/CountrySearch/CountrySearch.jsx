import { Row, Col, Button, Input } from 'antd';
import "./CountrySearch.css";
const { Search } = Input;
function CountrySearch(props) {
    const { selection, onSearchTypeSelection, onSearch, isSearching } = props;
    return (
        <div className="countrySearch">
            <Row>
                <Col xs={{ span: 24 }} sm={{ span: 12, offset: 6 }}>
                    <Row>
                        <Col span={12}>
                            <Button data-id="search" type={selection === "search" ? "primary" : "default"} size={'large'} block={true} onClick={() => { onSearchTypeSelection("search") }}>
                                Search
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button data-id="all" type={selection === "all" ? "primary" : "default"} size={'large'} block={true} onClick={() => { onSearchTypeSelection("all") }}>
                                All
                            </Button>
                        </Col>
                    </Row>
                    {
                        selection === "search" &&
                        <Row style={{ marginTop: '10px' }}>
                            <Col span={24}>
                                <Search size="large" placeholder="Enter a country" onSearch={onSearch} enterButton loading={isSearching}/>
                            </Col>
                        </Row>
                    }
                </Col>
            </Row>
        </div>
    );
}

export default CountrySearch;
