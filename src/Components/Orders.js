import React from "react";
import styled from "styled-components";
import {
  Container,
  MediumText,
  SmallParagraphText,
  MediumParagraphText,
} from "./CommonStyles";
import { CompletedTasks, TotalTasks, ToDoTasks, OverDueTasks } from "./Icons";

const BoxTemplate = ({
  Icon,
  TaskTextValue,
  TaskTextNumberValue,
  TaskTextPercentage,
  percentagePositive,
}) => (
  <TaskBoxContainer>
    <IconContainer>
      <Icon fill={"#fff"} />
    </IconContainer>
    <TaskTextContainer>
      <TaskText>{TaskTextValue}</TaskText>
      <TaskTextNumber>{TaskTextNumberValue}</TaskTextNumber>
    </TaskTextContainer>
    <TaskPercentage pos={percentagePositive}>
      {TaskTextPercentage}
    </TaskPercentage>
  </TaskBoxContainer>
);

const ProductTemplate = ({ id, name, image, inStock, Price, Sales, Views, isTitle }) => (
  <ProductContainer>
    <ProductId>{id}</ProductId>
    <ProductDescriptionContainer>
      <ProductImageContainer isTitle={isTitle}>
        <Image src={image} />
      </ProductImageContainer>
      <ProductName isTitle={isTitle}>{name}</ProductName>
    </ProductDescriptionContainer>
    <ProductInStock>{inStock}</ProductInStock>
    <ProductPrice>{Price}</ProductPrice>
    <ProductSales>{Sales}</ProductSales>
    <ProductViews>{Views}</ProductViews>
  </ProductContainer>
);
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.4fr 0.4fr 0.4fr 0.4fr;
  background-color: #fff;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.07);
  padding: 1rem 1.8rem;
  align-items: center;
`;
const ProductDescriptionContainer = styled.div`
display:grid;
grid-template-columns: max-content max-content;
`;
const ProductImageContainer = styled.div`
  width: 6rem;
  height: 6rem;
  display: ${props => props.isTitle ? "none" : "block"};
`;
const ProductId = styled(SmallParagraphText)`
`;
const ProductInStock = styled(SmallParagraphText)``;
const ProductName = styled(SmallParagraphText)`
margin-left: ${props => props.isTitle ? "0rem": "1rem"};
align-self: center;
`;
const ProductPrice = styled(SmallParagraphText)`
    
`;
const ProductSales = styled(SmallParagraphText)``;
const ProductViews = styled(SmallParagraphText)``;

const Orders = () => {
  return (
    <Container>
      <TaskBoxesContainer>
        {Tasks.map((task, index) => (
          <BoxTemplate key={index} {...task} />
        ))}
      </TaskBoxesContainer>

      <ProductsListContainer>
        {Products.map((product, index) => (
          <ProductTemplate {...product} key={index} />
        ))}
      </ProductsListContainer>
    </Container>
  );
};

const TaskBoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const TaskBoxContainer = styled.div`
  background-color: #fff;
  display: flex;
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.07);
`;
const IconContainer = styled.div`
  background-color: crimson;
  display: flex;
  padding: 0.8rem;
  border-radius: 1rem;
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
`;
const TaskTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TaskText = styled.p``;
const TaskTextNumber = styled(MediumText)``;
const TaskPercentage = styled.p`
  color: ${(props) => (props.pos ? "lightgreen" : "red")};
  align-self: center;
  margin-left: 2rem;
`;

const ProductsListContainer = styled.div`
  margin-top: 10rem;
`;

const Tasks = [
  {
    Icon: TotalTasks,
    TaskTextValue: "Total Tasks",
    TaskTextNumberValue: "34",
    TaskTextPercentage: "-25%",
    percentagePositive: false,
  },
  {
    Icon: ToDoTasks,
    TaskTextValue: "Total Tasks",
    TaskTextNumberValue: "14",
    TaskTextPercentage: "+10%",
    percentagePositive: true,
  },
  {
    Icon: OverDueTasks,
    TaskTextValue: "Tasks Overdue",
    TaskTextNumberValue: "5",
    TaskTextPercentage: "-10%",
    percentagePositive: false,
  },
  {
    Icon: CompletedTasks,
    TaskTextValue: "Completed Tasks",
    TaskTextNumberValue: "7",
    TaskTextPercentage: "+20%",
    percentagePositive: true,
  },
];

const Products = [
  {
    id: "ID",
    name: "Product Description",
    inStock: "In Stock",
    Price: "Price",
    Sales: "Sales",
    Views: "Views",
    isTitle: true,
  },
  {
    id: "0",
    name: "Ethnic Wear 1",
    image: "https://source.unsplash.com/random",
    inStock: "321",
    Price: "$232",
    Sales: "8392",
    Views: "802932",
  },
  {
    id: "1",
    name: "Ethnic Wear 1",
    image: "https://source.unsplash.com/random",
    inStock: "321",
    Price: "$232",
    Sales: "8392",
    Views: "802932",
  },
  {
    id: "2",
    name: "Ethnic Wear 1",
    image: "https://source.unsplash.com/random",
    inStock: "321",
    Price: "$232",
    Sales: "8392",
    Views: "802932",
  },
  {
    id: "3",
    name: "Ethnic Wear 1",
    image: "https://source.unsplash.com/random",
    inStock: "321",
    Price: "$232",
    Sales: "8392",
    Views: "802932",
  },
];

export default Orders;
