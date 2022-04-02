import React from "react";
import Card from "../container/Card";
import CardHeading from "./../custom_ui/CardHeading";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import { useSelector } from "react-redux";
import moment from "moment";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const CurrentCustomerActivePackage = () => {
  const currCustomer = useSelector(
    (state) => state.currentCustomer.currentCustomer
  );

  return (
    <Card className="flex-1">
      <CardHeading className=" font-medium text-base flex-1">
        Active Packages
      </CardHeading>
      {/* <div className=" border border-gray-400 rounded-md h-24 mt-3 px-2 py-1">
        <span className=" text-gray-400 text-sm">Display Items</span>
      </div> */}
      <Accordion allowMultiple>
        {currCustomer.package !== undefined &&
          currCustomer.package.map((pack) => {
            if (pack.packageName !== undefined) {
              return (
                <AccordionItem size={"sm"}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {pack.packageName}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} className="flex flex-col space-y-2">
                    <ListItemDBtn
                      content={"Usage Left"}
                      content2={pack.UsageLeft}
                      showBtn={false}
                      className=" text-sm"
                    />
                    <ListItemDBtn
                      content={"Valid till"}
                      content2={moment(pack.validTill).format("ll")}
                      showBtn={false}
                      className=" text-sm"
                    />
                    <ListItemDBtn
                      content={"Pack Amount"}
                      content2={pack.packageAmount}
                      showBtn={false}
                      className=" text-sm"
                    />
                    <ListItemDBtn
                      content={"Actual Amount"}
                      content2={pack.totalAmount}
                      showBtn={false}
                      className=" text-sm"
                    />
                  </AccordionPanel>
                </AccordionItem>
              );
            }
            return [];
          })}
      </Accordion>
    </Card>
  );
};

export default CurrentCustomerActivePackage;
