import { Row, Col, Skeleton, Alert, Collapse, Card, InputNumber } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import "./CountryList.css"
import { getExchangeLatest } from "../../services/exchange";
const { Panel } = Collapse;
function CountryList(props) {
    const { countries, isSearching, hasSearched } = props
    const [countryData, setCountryData] = useState([])
    const [ defaultActiveKey, setDefaultActiveKey ] = useState(countryData[0]?.numericCode)
    let samArray = [...Array(5).keys()]
    useEffect(() => {
        setCountryData(countries)
    }, [countries])
    function onChange(value, index) {
        countryData[index] = { ...countryData[index], "conversionEntered": value}
    }
    function onPressEnter(e, index) {
        const value = parseInt(e.target.value)
        const countriesData = [...countryData]
        const countryDatum = countriesData[index]
        getExchangeLatest(`SEK,${countryDatum.currencies[0].code}`).then(data => {
            if (data?.success) {
                const key = countryDatum.currencies[0].code
                const countryRate = data.rates[key]
                const swedishRate = data.rates["SEK"]
                const conversion = value * countryRate / swedishRate
                countriesData[index] = { ...countryData[index], "conversionEntered": value, "convertedValue": conversion}
                setCountryData(countriesData)
            } else {
                countriesData[index] = { ...countryData[index], "conversionEntered": 0, "convertedValue": 0}
                setCountryData(countriesData)
            }
            setDefaultActiveKey(index)
          });
    }
    if (countryData.length === 0 && hasSearched) {
        return (
            <div className="countryList">
                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 12, offset: 6 }}>
                        <Alert
                            showIcon
                            type="error"
                            message="No data available to display. Please search with a valid country name"
                        />
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <div className="countryList">
            <Row>
                <Col xs={{ span: 24 }} sm={{ span: 16, offset: 4 }}>
                    <Row>
                        <Col span={24}>
                            {
                                isSearching
                                ? samArray.map((samA) => <Skeleton active key={samA}/>) 
                                : <Collapse
                                    bordered={false}
                                    defaultActiveKey={defaultActiveKey}
                                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                    className="site-collapse-custom-collapse"
                                >
                                    {
                                        countryData.map((country, ind) => {
                                            return (
                                                <Panel header={country.name} key={country.numericCode} className="site-collapse-custom-panel">
                                                    <Card
                                                        hoverable
                                                        style={{ width: '100%' }}
                                                    >
                                                        <Row>
                                                            <Col xs={{ span: 12 }} sm={{ span:8 }} className='leftContainer'>
                                                                <p className="currency">{country.currencies[0].symbol}</p>
                                                            </Col>
                                                            <Col xs={{ span: 12 }} sm={{ span:8 }} className='middleContainer'>
                                                                <dl>
                                                                    <dt>Capital</dt>
                                                                    <dd>{country.capital}</dd>
                                                                    <dt>Population</dt>
                                                                    <dd>{country.population.toLocaleString()}</dd>
                                                                    <dt>Currency</dt>
                                                                    <dd>{`${country.currencies[0].code} - ${country.currencies[0].name}`}</dd>
                                                                </dl>
                                                            </Col>
                                                            <Col xs={{ span: 24 }} sm={{ span:8 }} style={{ padding: '20px' }} className='conversionContainer'>
                                                                <h4>Convert</h4>
                                                                <Row>
                                                                    <Col xs={{ span: 12}} sm={{ span: 24}}>
                                                                    <dl>
                                                                        <dt>From</dt>
                                                                        <dd>Swedish Krona</dd>
                                                                    </dl>
                                                                    <InputNumber
                                                                        min={1}
                                                                        value={country?.conversionEntered}
                                                                        onChange={(val) => { onChange(val, ind) }}
                                                                        onPressEnter={(e) => { onPressEnter(e, ind) }}
                                                                    />
                                                                    </Col>
                                                                    <Col xs={{ span: 12}} sm={{ span: 24}}>
                                                                    
                                                                
                                                                        <dl>
                                                                            <dt>To</dt>
                                                                            <dd>{country.currencies[0].code}</dd>
                                                                        </dl>
                                                                        <InputNumber value={country?.convertedValue}/>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                </Panel>
                                            )
                                        })
                                    }
                                </Collapse>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default CountryList;
