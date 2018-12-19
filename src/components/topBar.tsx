import * as React from "react"
import {withRouter, RouteComponentProps} from 'react-router'
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import NewMenuButton from './newMenuButton'
import {ToolsButton} from "./ToolsButton";

export const TopBar = withRouter(({history}: RouteComponentProps) => (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white'}}>
            <SvgIcon viewBox="0 0 100 24" style={{width: 170}}>
                <g fill="none" fillRule="evenodd">
                    <path fill="#D8D8D8" fillOpacity="0" d="M0 0h88.595v20.8H0z"/>
                    <path fill="#1F5AF6" d="M83.929.905l4.699 4.699L83.83 10.4l-4.698-4.699z"/>
                    <g fill="#000" fillRule="nonzero">
                        <path
                            d="M20.666 5.937H18.06l-.273.249-2.675 9.59h-.017l-2.998-9.59-.273-.25H9.098l-.273.25-2.981 9.538-.051-.036-.017-.018L3.1 6.186l-.273-.25H.17l-.17.25 4.174 13.506.29.266h2.624l.29-.266 2.98-9.663h.069l2.999 9.663.29.266h2.657l.29-.266 4.174-13.506zM50.158 5.937h-2.623l-.29.249-3.663 9.982-.034.018-3.63-10-.289-.25h-2.675l-.17.25 5.23 13.506.307.266h2.42l.306-.266L50.33 6.186zM63.686 13.695l.256-.25v-.408c0-2.189-.597-4.075-1.772-5.392-1.176-1.317-2.76-1.993-4.702-1.993-1.875 0-3.442.73-4.652 2.153-1.21 1.424-1.806 3.15-1.806 5.107 0 2.082.63 3.826 1.874 5.196 1.244 1.37 2.88 2.064 4.856 2.064 1.431 0 2.658-.356 3.646-1.085.988-.712 2.028-1.887 2.385-3.488l-.187-.267h-2.453l-.341.267c-.614 1.281-1.55 1.886-3.101 1.886-1.005 0-1.908-.374-2.658-1.103-.715-.694-1.124-1.53-1.227-2.723l9.882.036zm-9.711-2.491C54.4 9.549 55.73 8.32 57.468 8.32c2.3 0 3.254 1.708 3.526 2.883h-7.02zM32.525 5.937l-.256.267v1.388l-.051.053a4.8 4.8 0 0 0-1.738-1.423c-.733-.374-1.567-.552-2.47-.552-1.687 0-3.17.712-4.396 2.1-1.227 1.388-1.84 3.131-1.84 5.178 0 2.046.613 3.79 1.84 5.178s2.709 2.1 4.396 2.1c.903 0 1.72-.179 2.453-.552.136-.071.29-.143.426-.232.528-.338.971-.711 1.312-1.156.017-.018.068.018.085 0v1.441l.256.267h2.232l.255-.267V6.186l-.255-.267h-2.25v.018zm-1.38 10.356c-.75.836-1.653 1.245-2.743 1.245-1.057 0-1.84-.409-2.607-1.263-.767-.836-1.142-1.957-1.142-3.363 0-1.388.392-2.509 1.142-3.363.766-.836 1.533-1.263 2.607-1.263 1.073 0 1.976.409 2.743 1.245.494.552.817 1.21 1.005 2.01v2.706c-.17.836-.511 1.512-1.005 2.046zM73.142 11.844s-1.465-.32-2.675-.605c-1.107-.266-1.67-.605-1.67-1.423 0-.872.801-1.602 2.522-1.602 1.687 0 2.624.783 2.624 1.477l.29.267h2.453l.187-.249c0-1.833-1.516-4.021-5.486-4.021-4.14 0-5.435 2.544-5.435 4.181 0 1.37.477 2.99 3.646 3.755l2.726.64c1.38.32 1.96.819 1.96 1.655 0 .765-.733 1.69-2.641 1.69-1.772 0-2.846-.889-2.897-1.939l-.306-.267h-2.505l-.187.267c.221 2.349 1.89 4.555 5.878 4.555 4.515 0 5.435-2.882 5.435-4.395 0-2.028-1.108-3.345-3.919-3.986z"/>
                    </g>
                    <path fill="#9BA6B2"
                          d="M100.247 14.248h-3.34V20h-1.885V5.781h4.707c1.602 0 2.834.365 3.697 1.094.862.73 1.294 1.79 1.294 3.184 0 .885-.24 1.656-.718 2.314-.479.658-1.144 1.15-1.997 1.475l3.34 6.035V20h-2.012l-3.086-5.752zm-3.34-1.533h2.881c.931 0 1.672-.241 2.222-.723s.825-1.126.825-1.933c0-.88-.262-1.553-.786-2.022-.524-.469-1.281-.706-2.27-.713h-2.872v5.39zM109.358 20h-1.875V5.781h1.875V20zm3.428 0V5.781h4.014c1.237 0 2.33.274 3.281.82.95.547 1.685 1.325 2.202 2.335.518 1.009.78 2.168.786 3.476v.908c0 1.341-.258 2.517-.776 3.526a5.461 5.461 0 0 1-2.217 2.324c-.96.54-2.078.817-3.354.83h-3.936zm1.875-12.676v11.143h1.973c1.445 0 2.57-.45 3.374-1.348.804-.898 1.206-2.178 1.206-3.838v-.83c0-1.614-.38-2.87-1.138-3.764-.758-.896-1.834-1.35-3.227-1.363h-2.188zm19.277 6.104h-6.162v5.039h7.159V20H125.9V5.781h8.936v1.543h-7.06v4.57h6.161v1.534z"/>
                </g>
            </SvgIcon>
            <NewMenuButton/>
            <ToolsButton/>
            <IconButton style={{color: 'white'}} onClick={() => {
                history.push('/settings')
            }}>
                <SvgIcon viewBox="0 0 24 24">
                    <g fill="none" fillRule="evenodd">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path fill="#FFF"
                              d="M22.598 12.909l-1.893.543c-.448.128-.8.476-.934.923-.151.5-.35.983-.595 1.444-.22.41-.217.904.009 1.31l.95 1.714-1.292 1.292-1.713-.95a1.367 1.367 0 0 0-1.311-.01c-.461.246-.945.445-1.444.596a1.369 1.369 0 0 0-.923.934l-.543 1.893h-1.818l-.543-1.894a1.37 1.37 0 0 0-.924-.933 8.04 8.04 0 0 1-1.443-.595 1.36 1.36 0 0 0-1.31.009l-1.714.95-1.292-1.292.95-1.713c.226-.407.229-.9.01-1.31a8.1 8.1 0 0 1-.596-1.444 1.368 1.368 0 0 0-.934-.924l-1.893-.543v-1.818l1.893-.543c.448-.128.8-.476.934-.923.15-.499.35-.982.595-1.443.22-.41.218-.904-.008-1.311l-.951-1.714 1.292-1.292 1.713.95a1.367 1.367 0 0 0 1.311.01c.46-.245.944-.445 1.443-.596.447-.134.795-.486.924-.934l.543-1.893h1.818l.543 1.893c.128.448.476.8.922.934.5.15.983.35 1.444.595a1.366 1.366 0 0 0 1.311-.008l1.715-.951 1.292 1.292-.951 1.713c-.226.407-.23.9-.01 1.31.245.46.444.944.596 1.444.133.447.485.795.934.924l1.893.543v1.818zM12 16.147a4.147 4.147 0 1 0 0-8.294 4.147 4.147 0 0 0 0 8.294z"/>
                        <path fill="#9BA6B2" fillRule="nonzero"
                              d="M22.852 10.205l-1.894-.543a.45.45 0 0 1-.306-.305 9 9 0 0 0-.663-1.61.449.449 0 0 1 .001-.43l.951-1.713a.922.922 0 0 0-.154-1.099l-1.292-1.292a.92.92 0 0 0-1.099-.154l-1.714.95a.444.444 0 0 1-.43.002 8.957 8.957 0 0 0-1.609-.664.452.452 0 0 1-.305-.306l-.543-1.893A.922.922 0 0 0 12.91.48h-1.818a.922.922 0 0 0-.886.668L9.662 3.04a.452.452 0 0 1-.306.306 8.97 8.97 0 0 0-1.608.664.444.444 0 0 1-.43 0l-1.714-.952a.92.92 0 0 0-1.099.154L3.213 4.505a.922.922 0 0 0-.154 1.1l.95 1.713a.449.449 0 0 1 .001.43 8.963 8.963 0 0 0-.663 1.609.45.45 0 0 1-.306.305l-1.893.543a.922.922 0 0 0-.668.886v1.818c0 .411.272.773.668.886l1.894.543a.45.45 0 0 1 .305.305c.17.557.391 1.096.664 1.61a.448.448 0 0 1-.001.43l-.951 1.713c-.2.36-.137.808.154 1.098l1.292 1.292c.29.291.74.354 1.099.155l1.714-.95a.444.444 0 0 1 .43-.002 8.967 8.967 0 0 0 1.608.664.452.452 0 0 1 .306.306l.543 1.894a.922.922 0 0 0 .886.667h1.818a.922.922 0 0 0 .886-.668l.543-1.893a.45.45 0 0 1 .305-.306 8.988 8.988 0 0 0 1.609-.663.462.462 0 0 1 .216-.055.44.44 0 0 1 .214.055l1.714.951c.36.2.808.137 1.099-.154l1.292-1.292a.922.922 0 0 0 .154-1.099l-.95-1.714a.448.448 0 0 1-.002-.43 8.988 8.988 0 0 0 .664-1.61.452.452 0 0 1 .306-.305l1.893-.542a.922.922 0 0 0 .668-.886v-1.818a.922.922 0 0 0-.668-.886zm-.254 2.704l-1.893.543c-.448.128-.8.476-.934.923-.151.5-.35.983-.595 1.444-.22.41-.217.904.009 1.31l.95 1.714-1.292 1.292-1.713-.95a1.367 1.367 0 0 0-1.311-.01c-.461.246-.945.445-1.444.596a1.369 1.369 0 0 0-.923.934l-.543 1.893h-1.818l-.543-1.894a1.37 1.37 0 0 0-.924-.933 8.04 8.04 0 0 1-1.443-.595 1.36 1.36 0 0 0-1.31.009l-1.714.95-1.292-1.292.95-1.713c.226-.407.229-.9.01-1.31a8.1 8.1 0 0 1-.596-1.444 1.368 1.368 0 0 0-.934-.924l-1.893-.543v-1.818l1.893-.543c.448-.128.8-.476.934-.923.15-.499.35-.982.595-1.443.22-.41.218-.904-.008-1.311l-.951-1.714 1.292-1.292 1.713.95a1.367 1.367 0 0 0 1.311.01c.46-.245.944-.445 1.443-.596.447-.134.795-.486.924-.934l.543-1.893h1.818l.543 1.893c.128.448.476.8.922.934.5.15.983.35 1.444.595a1.366 1.366 0 0 0 1.311-.008l1.715-.951 1.292 1.292-.951 1.713c-.226.407-.23.9-.01 1.31.245.46.444.944.596 1.444.133.447.485.795.934.924l1.893.543v1.818z"/>
                        <path fill="#9BA6B2" fillRule="nonzero"
                              d="M12 6.931a5.069 5.069 0 1 0 0 10.138A5.069 5.069 0 0 0 12 6.93zm0 9.216a4.147 4.147 0 1 1 0-8.294 4.147 4.147 0 0 1 0 8.294z"/>
                    </g>
                </SvgIcon>
            </IconButton>
            <a style={{marginLeft:'auto'}} href="http://github.com/wavesplatform/waves-ide">
                <IconButton>
                    <SvgIcon viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </SvgIcon>
                </IconButton>
            </a>
            <div/>
        </div>
))
