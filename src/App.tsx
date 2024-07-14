import './App.css';
import { Button, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'flag-icon-css/css/flag-icons.min.css';
import { useState } from "react";
import Counter from "./Counter.tsx";

const testData = [
    {
        "id": "1",
        "name": "название",
        "description": "Описание описание описание описание описание. " +
            "ауццау, описание fe описание. fefe.",
        "price": "1215",
    },
    {
        "id": "2",
        "name": "название",
        "description": "Описание описание описание описание описание. ауццау, описание fe описание. " +
            "fefe.ауц ау цуацау ццау цуа ацу ацу ауцацууцаауц ауц",
        "price": "1215",
    },
    {
        "id": "3",
        "name": "товар 1",
        "description": "Описание описание описание описание описание. " +
            "ауццау, описание fe описание. fefe.",
        "price": "1215",
    },
    {
        "id": "4",
        "name": "название",
        "description": "Описание описание описание описание описание. ауццау, " +
            "описание fe описание. fefe. ацу ацуа уц цуа уацау уца ауц ауц ац уау ау " +
            "цауцауца уца уца уца уауауцуаа цуа",
        "price": "1215",
    },
    {
        "id": "5",
        "name": "название",
        "description": "Описание описание описание описание описание. " +
            "ауццау, описание fe описание. fefe.",
        "price": "1215",
    },
    {
        "id": "6",
        "name": "товаррр 2",
        "description": "Описание описание описание описание описание." +
            " ауццау, описание fe описание. fefe.",
        "price": "1215",
    }
]

export interface TestData {
    id: string;
    name: string;
    description: string;
    price: string;
}

export type CartItemType = {
    id: string;
    name: string;
    description: string;
    price: string;
    count: number;
}

type ProductsQuantity = {
    [key: string]: number;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#777777',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#F0F0F0',
}));

function App() {
    const [phone, setPhone] = useState<string>('');
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    const [productsQuantity, setProductsQuantity] = useState<ProductsQuantity>({});

    const handleChange = (value: string) => {
        setPhone(value);
    };

    const handleAddProductToBasket = (product: TestData) => {
        setCartItems(prevItems => [
            ...prevItems.filter(item => item.id !== product.id),
            { ...product, count: productsQuantity[product.id] ?? 1 }
        ]);
    };

    const handleQuantityChange = (product: TestData) => (value: number) => {
        setProductsQuantity({ ...productsQuantity, [product.id]: value });
    };

    return (
        <Container className={'header_block'}>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Item sx={{ fontSize: '44px' }}>Тестовое Задание</Item>
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid container spacing={11} sx={{ alignItems: 'center', justifyContent: 'center'}}>
                <Grid item xs={12} sm={5}>
                    <CardContent className={'header_card'}>
                        <Typography variant="h5" gutterBottom>
                            Отзыв 1
                        </Typography>
                        <Typography variant="h6" component="div">
                            Полученный с api
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            HTML
                        </Typography>
                        <Typography variant="body2" align="left" fontSize={21}>
                            Но всё же должен выглядеть красиво, на сколько возможно, конечно
                            <br />
                            <br />
                            Но всё же должен выглядеть красиво, на сколько возможно, конечно
                            <br />
                            <br />
                            Но всё же должен выглядеть красиво, на сколько возможно, конечно
                            <br />
                            <br />
                            Но всё же должен выглядеть красиво, на сколько возможно, конечно
                            <br />
                            <br />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <CardContent className={'header_card'}>
                        <Typography variant="h5"  gutterBottom>
                            Отзыв 2
                        </Typography>
                        <Typography variant="h6" component="div">
                            Полученный с api
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            HTML
                        </Typography>
                        <Typography variant="body2" align="left" fontSize={21}>
                            Но всё же должен выглядеть красиво, на сколько возможно, конечно
                            <br />
                            <br />
                            Но всё же должен выглядеть красиво, на сколько возможно, конечно
                            <br />
                            <br />
                            &lt;script&gt; alert(1) &lt;/script&gt;
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={2} md={2} className ={'no_mob'}>
                    &nbsp;
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={0}  className={'container_card mg_top_238 mg_bottom_27'}>
                        <Grid item xs={12} sm={11}>
                            <Typography variant="h4" gutterBottom>
                                Добавленные товары
                            </Typography>
                            <br />
                            {cartItems.map((product, index) => (
                                <Grid container spacing={1} key={index} sx={{ alignItems: 'center', marginBottom: '19px', fontSize: '20px' }}>
                                    <Grid item xs={4} sm={3}>
                                        {product.name}
                                    </Grid>
                                    <Grid item xs={2} sm={2}>
                                        X {product.count}
                                    </Grid>
                                    <Grid item xs={2} sm={2}>
                                    {parseFloat(product.price) * product.count}                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container spacing={4} sx={{ alignItems: 'center', marginBottom: '19px', marginTop: '19px' }}>
                            <Grid item xs={12} sm={7} md={6}>
                                <PhoneInput
                                    country={'md'}
                                    value={phone}
                                    onChange={handleChange}
                                    inputStyle={{ height: '68px', backgroundColor: '#222222', color: 'white', borderRadius: '15px', width: '100%' }} />
                            </Grid>
                            <Grid item xs={12} sm={5} md={4}>
                                <Button variant="contained" className={'card_desk_order_button'}>Заказать</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} md={2} className ={'no_mob'}>
                    &nbsp;
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={4.3}>
                {testData.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id} sx={{ marginBottom: '41px' }}>
                        <Paper className={'card_desk_tab'} sx={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                        }}>
                            <CardMedia
                                component="img"
                                image="../public/chimp_1.webp"
                                alt="chimp"
                                width={281}
                            />
                            <Typography variant="h4" gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography fontSize={21}>
                                {product.description}
                            </Typography>
                            <Typography variant="h4" style={{ marginTop: 'auto' }}>
                                Цена: {product.price} ₽
                            </Typography>
                            <br />
                            <Counter
                                value={productsQuantity[product.id] ?? 1}
                                onChange={handleQuantityChange(product)}
                            />
                            <Button
                                variant="contained"
                                onClick={() => handleAddProductToBasket(product)}
                                style={{ margin: '20px', backgroundColor: '#222222', width: '100%', height: '68px', borderRadius: '15px' }}
                            >
                                Купить
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default App;
