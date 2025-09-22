import type { Platform } from "../hooks/useGames";
import { 
    FaWindows, 
    FaPlaystation,
    FaXbox, 
    FaApple, 
    FaLinux, 
    FaAndroid
    } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
import { Stack } from "@mui/material";

interface Props {
    platforms: Platform[];
};

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        nintendo: SiNintendo,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe,
    };

    return (
        <Stack direction="row" spacing={'5px'} marginTop={'5px'} >
            {platforms.map((platform) => {
                const Icon = iconMap[platform.slug];
                return (<Icon key={platform.id} color="#9e9e9e"/>);
            })}
        </Stack>
    );
};

export default PlatformIconList;