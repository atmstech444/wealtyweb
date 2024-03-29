import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqTextContent = () => {
  return (
    <>
      <div className="faq-accordion">
        <Accordion allowZeroExpanded preExpanded={["a"]}>
          <AccordionItem uuid="a">
            <AccordionItemHeading>
              <AccordionItemButton>
                Which material types can you work with?
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="b">
            <AccordionItemHeading>
              <AccordionItemButton>
                Is Smart Lock required for instant apps?
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="c">
            <AccordionItemHeading>
              <AccordionItemButton>
                Can I have multiple activities in a single feature?
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="d">
            <AccordionItemHeading>
              <AccordionItemButton>
                Which material types can you work with?
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="e">
            <AccordionItemHeading>
              <AccordionItemButton>
                Why Choose Our Services In Your Business?
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="f">
            <AccordionItemHeading>
              <AccordionItemButton>
                How To Get Start With Us?
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default FaqTextContent;
