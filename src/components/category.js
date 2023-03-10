import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import MultiActionAreaCard from "./makeArticleCard.js" 

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Category() {
  const [categoryData, setCategoryData] = React.useState();
  const [selectedArticleData, setSelectedArticleData] = React.useState();
  const [value, setValue] = React.useState(0);

  const fetchArticleDataByCategory = async (Slug) => {
    let BASE_URL = `http://localhost:1337/api/articles?filters[category][slug][$eq]=${Slug}&&populate=*`;
    let headers = {
      Authorization:
        "Bearer 7b00111e422f8941b403ec57f2b438efb3573c39509fd559783c8c2b556e1922facc571c7badea67a2eb69192d12fbc2c34af5a9a40bf9aaaa9542903a82d4d88fc31b9368a539cdcf3fae18b30df5868fb3c2e9db1d116c08e4cfdac2f4b7f9a7300cec4eb722f5c041dc1d4327a483258873d0cebb1d60367bac568cbf2e28",
    };
    const resp = await axios.get(BASE_URL, { headers });
    setSelectedArticleData(resp.data.data);
  };

  React.useEffect(() => {
    (async () => {
      let BASE_URL = "http://localhost:1337/api/categories?populate=*";
      let headers = {
        Authorization:
          "Bearer 7b00111e422f8941b403ec57f2b438efb3573c39509fd559783c8c2b556e1922facc571c7badea67a2eb69192d12fbc2c34af5a9a40bf9aaaa9542903a82d4d88fc31b9368a539cdcf3fae18b30df5868fb3c2e9db1d116c08e4cfdac2f4b7f9a7300cec4eb722f5c041dc1d4327a483258873d0cebb1d60367bac568cbf2e28",
      };
      const resp = await axios.get(BASE_URL, { headers });
      setCategoryData(resp.data.data);
      fetchArticleDataByCategory("graph-ql");
    })();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const makeArticlesList = () => {
    if (selectedArticleData) {
      return (
        <>
          {selectedArticleData.map((elem, index) => {
            let title = elem.attributes.Title;
            return <p>{title}</p>;
          })}
        </>
      );
    } else {
      <h3>Data Loading...</h3>;
    }
  };

  if (!categoryData) {
    return <h3>Data Loading...</h3>;
  }

  let cardProps={
    selectedArticleData
  }

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {categoryData &&
            categoryData.map((elem, index) => {
              let { attributes } = elem;
              let { Title, Slug } = attributes;
              return (
                <Tab
                  sx={{
                    color: "#0D0D0D",
                    fontWeight: "bold",
                    fontStyle: "oblique",
                    fontSize: 16,
                    textTransform: "capitalize",
                  }}
                  label={Title}
                  {...a11yProps({ index })}
                  key={index}
                  onClick={() => fetchArticleDataByCategory(Slug)}
                />
              );
            })}
        </Tabs>
      </Box>
      {categoryData &&
        categoryData.map((elem, index) => {
          return (
            <TabPanel value={value} index={index}>
              <MultiActionAreaCard {...cardProps}/>
            </TabPanel>
          );
        })}
    </Box>
  );
}
