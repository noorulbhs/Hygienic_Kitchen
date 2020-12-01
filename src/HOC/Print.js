import React from "react";
import PrintProvider, { Print, NoPrint } from 'react-easy-print';

const PrintJS=()=>(
    <PrintProvider>
  <NoPrint>                  //
                // invisible in the print mode
                  //
          <Print single name="foo">
            <span>              //
              details           // visible in the print and non-print modes
            </span>             //
          </Print>
               // invisible in the print mode               //
  </NoPrint>
</PrintProvider>
)

export default PrintJS;
