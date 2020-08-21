import React from 'react';
import { Table } from 'react-bootstrap'
import { Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));




const Sell = ({
    sellhistory,
    onChange,
    onPublish,
    delivery,
    deliveryNumber,
}) => {
    const classes = useStyles();
    if (!sellhistory) return null
    console.log(sellhistory[1].productInfo.title)
    const number = 0
    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>이미지</th>
                    <th>User</th>
                    <th>PostNumber</th>
                    <th>input PostNumber</th>
                </tr>
            </thead>
            <tbody>

                {sellhistory.map((index, numbers) =>
                    <tr key={index._id}>
                        <td>{numbers}</td>
                        <td>{index.productInfo.title}</td>
                        <th>이미지</th>
                        <td>{index.user}</td>
                        <td>{index.deliveryNumber}</td>
                        <td>
                            <div>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">택배사</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="delivery"
                                        value={delivery}
                                        onChange={onChange}
                                    >
                                        <MenuItem value={'kr.chunilps'}>천일택배</MenuItem>
                                        <MenuItem value={'kr.cjlogistics'}>CJ대한통운</MenuItem>
                                        <MenuItem value={'kr.cupost'}>CU 편의점택배</MenuItem>
                                        <MenuItem value={'kr.cvsnet'}>GS Postbox 택배</MenuItem>
                                        <MenuItem value={'kr.cway'}>Woori Express</MenuItem>
                                        <MenuItem value={'kr.daesin'}>대신택배</MenuItem>
                                        <MenuItem value={'kr.epost'}>우체국택배</MenuItem>
                                        <MenuItem value={'kr.hanips'}>한의사랑택배</MenuItem>
                                        <MenuItem value={'kr.hanjin'}>한진택배</MenuItem>
                                        <MenuItem value={'kr.hdexp'}>합동택배</MenuItem>
                                        <MenuItem value={'kr.homepick'}>홈픽</MenuItem>
                                        <MenuItem value={'kr.honamlogis'}>한서호남택배</MenuItem>
                                        <MenuItem value={'kr.ilyanglogis'}>일양로지스</MenuItem>
                                        <MenuItem value={'kr.kdexp'}>경동택배</MenuItem>
                                        <MenuItem value={'kr.kunyoung'}>건영택배</MenuItem>
                                        <MenuItem value={'kr.logen'}>로젠택배</MenuItem>
                                        <MenuItem value={'kr.lotte'}>롯데택배</MenuItem>
                                        <MenuItem value={'kr.slx'}>SLX</MenuItem>
                                        <MenuItem value={'kr.swgexp'}>성원글로벌카고</MenuItem>
                                    </Select>
                                </FormControl>
                                {/* <Input onChange={onChange} name="delivery" value={delivery} /> */}
                                <br />
                                <Input
                                    onChange={onChange}
                                    name="deliveryNumber"
                                    value={deliveryNumber}
                                />
                                <br />
                                <Button onClick={() => { onPublish(index._id) }}>택배등록</Button>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table >
    )
}

export default Sell