//layout is rendered first and then it renders the children components 
//tabs are to display the tabs on the bottom of the screen
//stack is to display the stack of the screens
//slot is to display the children components
import { Tabs } from "expo-router"; //tabs are used for tab based navigation like whatsapp 
import { GluestackUIProvider } from "@/Components/ui/gluestack-ui-provider";


export default function RootLayout(){
    return (
        <GluestackUIProvider>
            <Tabs/>
        </GluestackUIProvider>
    );
}