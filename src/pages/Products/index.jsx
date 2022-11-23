import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/index';
import { AuthContext } from '../../provider/auth';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/siderbar';
import { api } from '../../service/index';
import {
  PhotosBox,
  Background,
  ContainerProduct,
  Card,
  YearAndKm,
  Price,
  ProductWrapper,
  BuyBtn,
  WrBottom,
  Description,
  PhTitle,
  RightSide,
  BoxAside,
  Cont,
  CommentWrapper,
  TagBox,
  UserCircle,
  Box,
  Box1,
  Box2,
  Box3,
  Boxx3,
  UserData,
  CommentBox,
  Boxx,
  Owner,
  Circle,
  SellerName,
  SellerInfo,
} from './styles';
import Footer from '../../components/footer/index';

const Products = () => {
  const [um, setUm] = useState([]);
  const { refresh, products, filterproducts } = React.useContext(AuthContext);
  const { id } = useParams();

  const getUser = async () => {
    const response = await api
      .get(`announcements/${id}`)

      .then((response) => {
        setUm(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(um);
  // const idNum = Number(id);

  // const product = products.find((prod) => Number(prod.id) === idNum);

  if (um) {
    return (
      <>
        <Sidebar />
        <Navbar />
        <Background></Background>
        <Boxx>
          <Box1>
            <ContainerProduct>
              <Cont>
                <ProductWrapper>
                  <img src={um.img_url} alt={um.name} />
                </ProductWrapper>
                <ProductWrapper>
                  <TagBox>
                    <h1>{um.title}</h1>
                    <Box>
                      <YearAndKm>
                        <div>{um.year}</div>
                        <div>{um.km}</div>
                      </YearAndKm>
                      <Price>R$ {um.price}</Price>
                    </Box>
                    <WrBottom>
                      <BuyBtn>Comprar</BuyBtn>
                    </WrBottom>
                  </TagBox>
                </ProductWrapper>
                <ProductWrapper>
                  <Description>
                    <h2>Descrição</h2>
                    <p>{um.description}</p>
                  </Description>
                </ProductWrapper>
              </Cont>
            </ContainerProduct>

            <Box2>
              <RightSide>
                <BoxAside>
                  <PhTitle>Fotos</PhTitle>
                  <PhotosBox>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </PhotosBox>
                </BoxAside>

                <Owner>
                  <SellerInfo>
                    <Circle>
                      {um?.owner?.name?.split(' ').map((n) => n[0])}
                    </Circle>
                    <SellerName>{um?.owner?.name}</SellerName>
                    <p>{um?.owner?.description}</p>
                    <button>Ver todos os anúncios</button>
                  </SellerInfo>
                </Owner>
              </RightSide>
            </Box2>
          </Box1>

          <Box3>
            <Boxx3>
              <CommentWrapper>
                <h1>Comentários</h1>
                {um['comments']?.map((user) => (
                  <Card key={user.id}>
                    <UserData>
                      <UserCircle>JL</UserCircle>
                      <span>{user['owner'].name}</span>
                    </UserData>
                    <p>{user.text}</p>
                  </Card>
                ))}
              </CommentWrapper>
              <ProductWrapper>
                <CommentBox>
                  <UserData>
                    <UserCircle>JL</UserCircle>
                    <span>Julia Lima</span>
                  </UserData>
                  <form>
                    <textarea
                      placeholder="Carro muito confortável, foi uma ótima experiência de
                      compra..."
                    ></textarea>
                    <button type="submit" value="Submit">
                      Comentar
                    </button>
                  </form>
                </CommentBox>
              </ProductWrapper>
            </Boxx3>
          </Box3>
        </Boxx>
        <Footer />
      </>
    );
  }
};

export default Products;
