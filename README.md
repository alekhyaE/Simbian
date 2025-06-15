# Simbian
Thought process:
1. To make the component structure clean, used separate components for withSimbian, withoutSimbian to make code readable and extendable 
2. Used svg icons for better performance (better zooming capability) instead of making network request for each image , which would take up significant bandwidth incase of large scale applications, making this approach scalable
3. Separate component for svg icons(Can be imported at multiple components ensuring reusability)
4. Used mock data to show alerts data instead of making any API calls
   
Animation Library:
Framer-motion

AOI:
1. Animations and styling can be still improved
2. We should have routing enabled for Simbian
3. Mock data can be structured better
