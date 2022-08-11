import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the landing page", () => {
  render(<App />);

	// expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
  // expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  // expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  // expect(screen.getByRole("img")).toBeInTheDocument();
});


// https://testing-library.com/docs/react-testing-library/example-intro
// https://jestjs.io/ru/docs/tutorial-react

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// jest.mock("../../store/apis/competitorsApi");




// import Competitor from "./Competitor";

// test("Render competitor with positive delta", () => {
//   const { container } = render(
//     <Competitor name="Test" deltaPct={10} trScore={9.5} current={10} />
//   );
//   expect(screen.getByText("Test")).toBeInTheDocument();
//   expect(screen.getByText(10)).toBeInTheDocument();
//   expect(screen.getByText("+10.0%")).toBeInTheDocument();
//   expect(container.getElementsByClassName("positive")[0]).toBeInTheDocument();
// });

// test("Render competitor with negative delta", () => {
//   const { container } = render(
//     <Competitor name="Test" deltaPct={-10} trScore={9.5} current={10} />
//   );
//   expect(screen.getByText("Test")).toBeInTheDocument();
//   expect(screen.getByText(10)).toBeInTheDocument();
//   expect(screen.getByText("-10.0%")).toBeInTheDocument();
//   expect(container.getElementsByClassName("negative")[0]).toBeInTheDocument();
// });

// test("Render competitor with neutral delta", () => {
//   const { container } = render(
//     <Competitor name="Test" deltaPct={0} trScore={9.5} current={10} />
//   );
//   expect(screen.getByText("Test")).toBeInTheDocument();
//   expect(screen.getByText(10)).toBeInTheDocument();
//   expect(screen.getByText("0.0%")).toBeInTheDocument();
//   expect(container.getElementsByClassName("neutral")[0]).toBeInTheDocument();
//   expect(container.getElementsByClassName("positive").length === 0).toBe(true);
//   expect(container.getElementsByClassName("negative").length === 0).toBe(true);
// });





// jest.mock("../../store/apis/competitorsApi");

// test("Render empty competitors list", () => {
//   const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
//   const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
//   useSelectorMock
//     .mockReturnValueOnce("productId")
//     .mockReturnValueOnce(
//       {
//         byId: {},
//         allIds: []
//       })
//     .mockReturnValueOnce(30);
  
//   useDispatchMock.mockReturnValue({
//     byId: {},
//     allIds: []
//   });
  
//   render(<CompetitorsContainer />);
//   expect(screen.getByText("Add your competitors to see more")).toBeInTheDocument();
//   expect(screen.getByText("Products")).toBeInTheDocument();
//   expect(screen.getByText("Page views")).toBeInTheDocument();
// });

// test("Render one competitor", () => {
//   const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
//   const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
//   useSelectorMock
//     .mockReturnValueOnce("productId")
//     .mockReturnValueOnce(
//       {
//         byId: {"testCompetitor" : {
//             name: "Test",
//             trScore: 9.5,
//             current: 100,
//             deltaPct: 9
//           }},
//         allIds: ["testCompetitor"]
//       })
//     .mockReturnValueOnce(30);
  
//   useDispatchMock.mockReturnValue({
//     byId: {},
//     allIds: []
//   });
  
//   render(<CompetitorsContainer />);
//   // expect(screen.getByText("Products")).toBeInTheDocument();
//   // expect(screen.getByText("Page views")).toBeInTheDocument();
//   // expect(screen.getByText("Test")).toBeInTheDocument();
//   // const emptyStateMessage = screen.queryByText("Add your competitors to see more");
//   // expect(emptyStateMessage).toBeNull();
// });

// test("Should render only first four competitors", () => {
//   const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
//   const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
//   useSelectorMock
//     .mockReturnValueOnce("productId")
//     .mockReturnValueOnce(
//       {
//         byId: {
//           "testCompetitor" : {
//             name: "Test",
//             trScore: 9.5,
//             current: 100,
//             deltaPct: 9
//           },
//           "testCompetitor2" : {
//             name: "Test",
//             trScore: 9.5,
//             current: 100,
//             deltaPct: 9
//           },
//           "testCompetitor3" : {
//             name: "Test",
//             trScore: 9.5,
//             current: 100,
//             deltaPct: 9
//           },
//           "testCompetitor4" : {
//             name: "Test",
//             trScore: 9.5,
//             current: 100,
//             deltaPct: 9
//           },
//           "testCompetitor5" : {
//             name: "Test",
//             trScore: 9.5,
//             current: 100,
//             deltaPct: 9
//           },
//         },
  
//         allIds: ["testCompetitor", "testCompetitor2" ,"testCompetitor3" ,"testCompetitor4" ,"testCompetitor5"]
//       })
//     .mockReturnValueOnce(30);
  
//   useDispatchMock.mockReturnValue({
//     byId: {},
//     allIds: []
//   });
  
//   const {container} = render(<CompetitorsContainer />);
//   expect(screen.getByText("Products")).toBeInTheDocument();
//   expect(screen.getByText("Page views")).toBeInTheDocument();
//   const emptyStateMessage = screen.queryByText("Add your competitors to see more");
//   expect(emptyStateMessage).toBeNull();
//   expect(container.getElementsByClassName("title").length).toEqual(4);
// });




// test("renders positive product metric", () => {
//   render(<ProductMetric isPositive={true} {...defaultProps} />);
  // const titleElement = screen.getByText(/metric/i);
  // const deltaNumber = screen.getByText(/44/i);
  // const deltaSymbol = screen.getByText(/\u25B2/i);
  // const deltaValue = screen.getByText(/3/i);
  // expect(titleElement).toBeInTheDocument();
  // expect(deltaNumber).toBeInTheDocument();
  // expect(deltaSymbol).toBeInTheDocument();
  // expect(deltaValue).toBeInTheDocument();
// });

// test("renders negative product metric", () => {
//   render(<ProductMetric isPositive={false} {...defaultProps} />);
  // const titleElement = screen.getByText(/metric/i);
  // const deltaNumber = screen.getByText(/44/i);
  // const deltaSymbol = screen.getByText(/\u25BC/i);
  // const deltaValue = screen.getByText(/3/i);
  // expect(titleElement).toBeInTheDocument();
  // expect(deltaNumber).toBeInTheDocument();
  // expect(deltaSymbol).toBeInTheDocument();
  // expect(deltaValue).toBeInTheDocument();
// });




// test("Should render child", () => {
//   const store = createStore(reducers);
//   render(
//     <Provider store={store}>
//       <Sidebar>
//         <div>Child</div>
//       </Sidebar>
//     </Provider>
//   );
//   expect(screen.getByText("Child")).toBeInTheDocument();
// });

// test("Should can expand and collapse", () => {
//   const store = createStore(reducers);
//   const { container } = render(
//     <Provider store={store}>
//       <Sidebar>
//         <div>Child</div>
//       </Sidebar>
//     </Provider>
//   );
//   expect(
//     container.getElementsByClassName("sidebar-expanded")[0]
//   ).toBeUndefined();
//   userEvent.hover(container.getElementsByClassName("sidebar")[0]);
//   expect(
//     container.getElementsByClassName("sidebar-expanded")[0]
//   ).toBeInTheDocument();
//   userEvent.unhover(container.getElementsByClassName("sidebar")[0]);
//   expect(
//     container.getElementsByClassName("sidebar-expanded")[0]
//   ).toBeUndefined();
// });





// test("Should render user info", () => {
//   const userFullName = "Bob Tate";
//   const userRole = "Customer Success Team";
//   const avatarUrl = "some url";
//   const { container } = render(
//     <UserInfo
//       userFullName={userFullName}
//       userRole={userRole}
//       avatarUrl={avatarUrl}
//     />
//   );

//   expect(screen.getByText(userFullName)).toBeInTheDocument();
//   expect(screen.getByText(userRole)).toBeInTheDocument();

//   const documentImages = container.getElementsByTagName("img");
//   expect(documentImages.length).toEqual(1);
//   expect(documentImages[0].getAttribute("src")).toEqual(avatarUrl);
// });




// test("Should render vendor info", () => {
//   const { container } = render(
//     <VendorInfo
//       name="Altoo"
//       regionShort="CH"
//       countryShort="ZG"
//       industry="Internet Software & Services"
//       city="Zug"
//       companySize="10 to 50"
//     />
//   );
//   expect(screen.getByText("Altoo")).toBeInTheDocument();
//   expect(screen.getByText("CH", { exact: false })).toBeInTheDocument();
//   expect(screen.getByText("ZG", { exact: false })).toBeInTheDocument();
//   expect(screen.getByText("Zug", { exact: false })).toBeInTheDocument();
//   expect(
//     screen.getByText("Internet Software & Services", { exact: false })
//   ).toBeInTheDocument();
//   expect(screen.getByText("|", { exact: false })).toBeInTheDocument();
// });








// import { createStore } from "redux";
// import { Provider } from "react-redux";

// import {
//   TopRatedAwardCard,
//   BestOfAwardCard,
//   TechCaresAwardCard,
//   MostLovedAwardCard,
// } from "./AwardCards";

// import { getTopRatedSummary } from "../../store/apis/awardsApi";
// import reducers from "../../store/reducers";

// jest.mock("../../store/apis/awardsApi");

// describe("TopRatedAwardCard", () => {
//   it("should render values fetched from server", async () => {
//     getTopRatedSummary.mockResolvedValue({
//       data: {
//         summary: { successful: 12, unsuccessful: 5 },
//       },
//     });

//     render(<TopRatedAwardCard vendorId="vendor" />);

//     const productsOnTrackLabel = await screen.findByText("Products On Track");
//     expect(productsOnTrackLabel.previousElementSibling).toHaveTextContent(12);

//     const productsBehindLabel = await screen.findByText("Products Behind");
//     expect(productsBehindLabel.previousElementSibling).toHaveTextContent(5);
//   });
// });

// const store = createStore(reducers, {
//   vendors: {
//     currentVendorProductsById: {
//       "000000000000000000000000": {
//         _id: "000000000000000000000000",
//         published: true,
//       },
//       "000000000000000000000001": {
//         _id: "000000000000000000000001",
//         published: false,
//       },
//       "000000000000000000000002": {
//         _id: "000000000000000000000002",
//         published: true,
//       },
//     },
//   },
// });

// describe.each`
//   AwardCard
//   ${BestOfAwardCard}
//   ${TechCaresAwardCard}
//   ${MostLovedAwardCard}
// `("$AwardCard.name", ({ AwardCard }) => {
//   it("should get published products count from redux", async () => {
//     render(
//       <Provider store={store}>
//         <AwardCard />
//       </Provider>
//     );

//     const eligibleProductsLabel = await screen.findByText("Eligible Products");
//     expect(eligibleProductsLabel.previousElementSibling).toHaveTextContent(2);
//   });
// });

