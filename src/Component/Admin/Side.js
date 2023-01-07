import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import "../Basic.css";
import { Link } from 'react-router-dom';
function Side() {
    return <>
     <div className='sidebar-container'>
        <div className='whole-top'>
     <div className='logo'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAAD/CAYAAAByx1obAAAABHNCSVQICAgIfAhkiAAAGNxJREFUeF7tnU+oJMd9x6t73ugiK+SmmNyywj74sW8miPxhFQK5rEMuVrCSQAKCFeQSgoVskiDQgq1TQrTYhPgQogWDCSE22DkEtL4kIrsEjMnMWyYQB7+jSXQJwbIOYma6Ta17NrOj6an6VVdVV1d/3uUdpvpXv9/nV/Xt6qrq6kLxBwEIQGDgBIqB+4/7EIAABBRCRiOAAAQGTwAhG3wKCQACEEDIaAMQgMDgCSBkg08hAUAAAggZbQACEBg8AYRs8CkkAAhAACGjDUAAAoMngJANPoUEAAEIIGS0AQhAYPAEELLBp5AAIAABhIw2AAEIDJ4AQjb4FBIABCCAkNEGIACBwRNAyAafQgKAAAQQMtoABCAweAJehGw+n9eDJ0EAEIBAMgQWi4VIm0SF26JEyJLJP45AIAsCCFkWaSQICIybAEI27vwTPQSyIICQZZFGgoDAuAkgZOPOP9FDIAsCCFkWaSQICIybAEI27vwTPQSyIICQZZFGgoDAuAkgZOPOP9FDIAsCCFkWaSQICIybAEI27vwTPQSyIICQZZFGgoDAuAkgZOPOP9FDIAsCgxIyqbNZZIggIDAiAq4HSki1odfTL6TOjij/hAqBLAggZFmkkSAgMG4CCNm480/0EMiCAEKWRRoJAgLjJoCQjTv/RA+BLAggZFmkkSAgMG4CCNm480/0EMiCAEKWRRoJAgLjJoCQjTv/RA+BLAggZFmkkSAgMG4CCNm480/0EMiCAEKWRRoJAgLjJoCQjTv/RA+BLAggZFmkkSAgMG4CCNm480/0EMiCAEKWRRoJAgLjJoCQjTv/RA+BLAggZFmkkSAgMG4CCNm480/0EMiCAEKWRRoJAgLjJoCQjTv/RA+BLAggZFmkkSAgMG4CCNm480/0EMiCAEKWRRoJAgLjJoCQjTv/RA+BLAggZFmkkSAgMG4CCNm480/0EMiCAEKWRRoJAgLjJoCQjTv/RA+BLAggZB7TOJ/P31ZK3fJoUmLq7mKxeOXYBT36ddSni4uLW2VZalatf+v1+rnVanUlAdBWVhB/K0MffmAjHAGEzCNbQYfxWOtjU1kJmVLqar1e31itVu91hSXIC0LWFXZP1yNkHsELOozHWrMVMlXX9berqvqDhw8fftAFmCAvCFkX0D1ei5B5hC/oMB5rzVfImshuLxaLN7sAE+QFIesCusdrETKP8AUdxmOt2QuZDvClxWLxTVdogrwgZK6Qe74OIfOYAEGH8VjrKIRMP2a+sFwuH7iAE+QFIXMBnMA1CJnHJAg6jMdaxyFkzeT/TZeVTEFeELIQLTOCTYTMI2RBh/FY62iEzHnyX5AXhCxEy4xgEyHzCFnQYTzW+lNTVVW9cnl5efeYYYlf6/X6YrVaPfTu4J5Bm31kJ+q/s1gsPi/xTxA/QiYBm1BZhCyhZOxcubi4uFmW5TsC1052QEFHVgMQMj0ye3W5XH7Flo8gfoTMFmpi5RCyxBJyfn5+bTqd3lNKXbN07Wq73V6c2msl6MiDELJmBPrpy8tLzcn4J4gfITPSTLMAQpZQXq5fv/50WZZfL4riM7Zu2bzKI+jIgxEyyeS/IH6EzLbhJVYOIUsoIfP5/A2l1JcELlntrxJ05CEJmX7EfFBV1U3Tzn9B/AiZoPGlVBQhSyQbDvNi1jveBR15UEKmU6dfY1ouly+eSqMgfoQskf4gdQMhkxILUL6ZF/uBrWnpO4iCjjw4IWuYnRR1QfwImW0jTKwcQtZzQpp5sXtFUdywdEWfCiHaGCroyEMVMr39pHXyXxA/QmbZCFMrhpD1nJH5fP6WUuo1WzdOddg2G4KObOuGsdypfW0d95G11t228CGIHyEzZjbNAghZj3mZz+efVUp9w9YF6f6pnV1BR7Z1xViuDyHTK5nHtqII4kfIjJlNswBC1lNeXObFTJPaOY7I9HygZDvKsflDhKynRh6xWoQsIuxdVXpebDKZXPrc9HoqDEFH9kbD14hsu91+TMhKx/DE5L8gfkZk3lpAXEMIWVzej2oTdKxH5bu+NiStzwcSX0K2WCwKh7cddAiP99gJ4kfIfCS/BxsIWWTo0onuU4Jg67qgI9uaNJbzKWS6Mod9do9vAIL4ETJjZtMsgJBFzMv5+fn16XSqHylt/8QnPRwzLOjItn4Zy/kWMl3hbDb7XFEUXzZW/v8FHm1VmU6nr1t+3QohE8BNqShCFikb0nkx29dvbNzPRciax3LRdhU9+a+vs1wwQMhsGlSCZRCySEmZzWbfsuxM2iPxptdTYUiErOt8nA1OyeO1niPbt+nyYr2NT00ZhEwAK6WiCFmEbEgfiVw2vY5FyHSc5+fnz06nU31+v+1RR7ZZRshsSSVWDiELnJDZbHajKIr7gmqsXwa3tZnTiGwXs8N8ow0uhMyGUoJlELKASZGOHKQvg9u6nqOQ6dhdVjINzBAy20aVWDmELGBCHObFbqxWq/d8u5SrkGlODme4ncKLkPlufJHsIWSBQEvnxbp8t9EUQs5CpmMX3jAQMlODGeDvCFmApEkfeXxseh3TZP9hrA5HIbXhYkQWoD/EMImQeabs8DpN8M6T+4hMp9CB+7HMB8+F5+aGuYYAQuaxKTjscTJ+AcmHe2MQMk+T/wiZjwbXgw2EzCN06byYx6ofmWrbzDoWIWvE7FZZlm87skXIHMH1fRlC5jEDEsHwWO1jUz6EzLNfR4Why85+G/86rGQiZDaAEyyDkHlMCkL2EZi9CJnDI/7OcYTMY3+IaQoh80gbIUtDyJrJf5fXmBAyj/0hpimEzCNthCwdIWvE7Np0OrX+zJ5SCiHz2B9imkLIPNJGyNISsmby/2ZZlu9YphkhswSVWjGEzGNGELL0hEx7JJj8R8g89oeYphAyj7QRsjSFrBEzvSXjliHdCJnH/hDTFELmkTZClq6QWb7GhJB57A8xTSFkMWlTFwQgEIQAQhYEK0YhAIGYBBCymLSpCwIQCEIAIQuCFaMQgEBMAghZTNrUBQEIBCGAkAXBilEIQCAmAYQsJm3qggAEghBAyIJgxSgEIBCTAEIWkzZ1QQACQQggZEGwYhQCEIhJACGLSZu6IACBIAQQsiBYMQoBCMQkgJDFpE1dEIBAEAIIWRCsGIUABGISQMhi0qYuCEAgCAGELAhWjEIAAjEJIGQxaVMXBCAQhABCFgQrRiEAgZgEELKYtKkLAhAIQgAhC4IVoxCAQEwCCFlM2tQFAQgEIYCQBcGKUQhAICYBhCwmbeqCAASCEEDIgmDFKAQgEJMAQhaTNnVBAAJBCCBkQbBiFAIQiEkAIYtJm7ogAIEgBBCyIFgxCgEIxCSAkMWkTV0QgEAQAghZEKwYhQAEYhJAyGLSpi4IQCAIAYQsCFaMQgACMQkgZDFpUxcEIBCEAEIWBCtGIQCBmAQQspi0qQsCEAhCACELghWjEIBATAIIWUza1AUBCAQhgJAFwYpRCEAgJgGELCZt6oIABIIQQMiCYMUoBCAQkwBCFpM2dUEAAkEIIGRBsGIUAhCISQAhi0mbuiAAgSAEELIgWN2MXr9+/emqqq6dnZ09U9f1Jw+tFEXx/c1m8/5qtXroVgNX9UFgl9fJZPJxpdTPt+W1LMurhw8fftCHj+fn59eUUk9PJpPnD+svy/JH6/X6v5RSH6xWq6s+/DPViZCZCAX+fTab3SiK4jfqur5ZFMUN2+rquv62UupflFLfWy6XD2yvOz8/vz6dTi9ty6/X64sUhfPi4uJmWZbvGOK42m63F32Ig2telVJaKN6tqurBdrt9N5RwnJ+fPzudTn9NKfWbSqlbtu1Bl9NtryiKf6+q6rt1Xd/vg++hvwiZJIOeyupGdHZ29ntFUfyxUkrfCbv+XdV1/VebzebvV6vVe6eM5SJks9nsvo3wV1X1yuXl5d2ugG2u1yOvoih+tyiKWza+2dis61rfpL5hk1sbe03+X1ZKvWZT3rLMnaqqvnN5eXnPsrz3YgiZd6TtBncNvSzLt0NVW9f1q1VV/W3bXTIHIbMcjT1CrIVguVy+EIr3zm4zAvuapxtTm7t31+v166ab1bGLddubTCZf8ixgh1Xp0eSfLRaLb4bmzYgsNuGmPi0gZ2dnX/V1pz4Vhu68m83m5WOPJTkIme1obMeoqqpPhxwtzOfzN5RSWiSi/ElHmXr+azqd6tGSj9G/MUb96LnZbL4Q6rH4mAOMyIxp6V5AMoLoXttjC1eLxeK5Q3tDFzKp/yFHZXqUU5bl14ui+IzHvNmYurtYLF6xKdhT21Ox51YRMpvW0KFMXw2p7a4tFYLYDdKEej6f68dy0eS0thliVBZ7JCYdYcYeie38i/U4v99WEDJTz+nwe18ipl1er9c/d2wuZchCJvV9P3W+O9d8Pv+snoTv0DycLrWNoxkt3osxlXEYSIibhgkWQmYi5Ph7czf8gePlXS+7vVgs3jxmRCoGKY3IXEdjeyOFFyRbVdqS0Eyc6y0sojmnvW0LP9zZLsvyU0qpnxWMMl+ymUy/uLi45bCo9Hjrx86/oiieKYriut7XaCmKR6c0ujZo0/UImYmQw+9d74b6rqs3v+q9RPvVl2V5w6ZBnRKfoQqZ1O+WtFnPLZ1Ku8No7M56vf4L02rjbu+ZUkpvjzgmktb74ubzub6J2grtVVVVf2RaENntPavr+vfb5gWlCxEO3evoJQiZL5J7dhzvhtrC7fV6/Xem1Z69BvXq4V1S3/WXy+WLbWFJBSGVEZmv+Sgf8cxms28JJvitRlCH+dLTEkVRvHGQ39aR9v71jSDet2na+qZZVdVN6abWpg3+4eFqbduUho0vXcogZF3oHbnW8bHjar1e/7bLDnrdaJVSX9h1LNP8xBCFrOk0/+MpVZ1GZU1+f2zji+181ilbzU3xdT26shWJ2Wz2uaIovmzjo6m9mGw0UyjaP70AYyW0JpsuvyNkLtROXOMwGtMidtM0CjO5qR939JD/1GhM2xiikPkaje0YdhmVSfjpzcnL5fIrptyZftdCPplMfsv2DQXJXOJ2u/2YdDR2zF/d/tbr9aJrOzaxaPsdIXMl13KddLNml0516IIeLZgapaQjavs+/XNBLRyNvWS5knhnsVh83tEfybuqzvW4+La7RiJk6/X6ub7Ep0uMh9ciZB5pOqxURh+KD03IBKOxRyxtbyS2j2mHzUMy/9TcCKILhXAOrxex9djtHplCyDwSlT5W9nE3HJKQSeYbdyNHwd49p5uIlJ9uXnolb7vd/pNp1dJXU5SMyHSdzUkqf+lja4qvGKR2EDIpsRPlJQ3Ix0Swi+vSjtjno6XgxvB4Al8ofkc3DZ/iKuV3YOuOUurf1uv1v4YUNUk73Pdvd9KG9Ggol3bo+xqEzCNRIUynEUFXd6UdsS8hkwjS4cqbQACdciDMc1vK9ObTf6yq6j+22+33XFas2wwL4j/ZnHZn3tV1/Z/b7XYZUny7tmvXnCwWi0JSt6hwm+FYzkoC25WVLMs31zjtL3Lxbf+aoQiZbWc8NrKVLBC4zJXN5/O3Ah2H42XE5jBXa9WsUh6xxdKG7IVsKAIxBD+Fo7GjByfaLhK4bJGQMrRSiY8WultV1T+YdtufuOk7vVwv8NX6ME+BTeeiCJkzuicvlDbuvh7ZhuCnYMK+9ZUdwajE+rWf/YwHHJU90bD0KKiu6zelgiaI30cP0G+k/E2fj54ImY80Dmij6RCEzHYLhWknue2kt8v7gbHPInM5rFBwQ/DSC1w4eqmY7Re+MA5nx3zqQibpfKb5LcGeL6dRWaTjo/cbqX6ce1myTSLSEdz7Pt7Zbre3TRuz/fW8n1piROaJaOoCsQszdT8FozGrjZy29rqMJhrx/WvBaROdWp10/2Gz+PEngRYojsVilZtOEA4uRsg80UxdIIYgZMLRmNVn6gQ2O52jFeILSm1Ns8OJFfr1Kt9fUGpzM+qqPELmScgchrdREz0EIbN9tcZ0VNF+SoUroF4+UmJxrpiPVufcfmzOFfPgYKcbg7R+hExK7ER54WF2Tpsxu7qb6shR6ldXDseuD/G2RbN6OFdK/Wpd179secqqMTyJmJ8y1ixazJRSz+uTYAUn1dr46OVEXmNFzJHZILIvY7tKpi2G6DQ2nkoFI9Y2EQk7mzhdy3Q9n8tUb/NxZv11q+eVUi91ETZfR/Ac+ty0kU9o8e0yr+ayR8/Er+13RmSu5I5cZ7sbfXdpLJHYdzVFIZP65DFlHzEV+wbT5avzsdpPM8/4Ow6jtU6HWEryjJBJaBnKOmxCjL66IxWNGJ0lldHYLr2hR2XHmpHLVo4Yudn31WErB0J2LNmxVLeLttku94cYlQ3xYEXJe5Fd8iK51tf8k6ROXVb60ZrYQqZ9FH54BSEbqpBJHy+VUqM+6tr2nUipKHQtbyMSulPbfJpN4otkdGryUY++lVIf+DwBVjiiR8iGKmSS5f69GJ0/PqIb1tnZ2ReH+PGRFEdjezk52Ql3Hdr1XcgTk9bWL3ubNsbuiaK3dyGFQhZt6iTW01r2p1/sN0yHUdnu8s6fg1NKWXVA21GC6a5va6flxvTG4efEutjzfe2p2A9fGt8JWl3X911fzxGKxMl9Wi3ztVbt6xRHyYhRr8r6HrGeuAHULvnnPDIDNelc2b65lD7Q69I4jl1zKArC0ZjXRxRBbo7Wa+H7naqqvmN7GOHuK0nCL4Of3Id46pF9d67YZrP5Z9sDHQ8/O2jTLkzvwtrYsC3DiMyWlLCcwwqmsIaTxVsbufCu782nQyGTfHuxrmuvGyslI+Zjj2/CeT19Euy7Sqn/06fB7gMty/JTdV3/guBjv48vN3xN/tnpdGr9HVC9uFEUxf/Wdf2wruv3d5UURfFMs0n21x3eI/V68zE1RITMRKjD74L3/DrUcvzStrthCkImmUcMsa9LeJrvEzcFi9GY91weMXhSJIRCG8TfkFMSLdMUPFoGyWRjtC8xazvNIQUhk4yIupxKYZjrsZ6f278pSHwP1K70wtCNtkMMJTeJQP7pt1a8fJhY4h8jMgktx7I9idnRyeC+hUza0QK/hnNpmdJHozKp75a2JcWMW3USENpe3iFGyCTNqEPZZpvEV7u8WyeovnU7R99CJuxoQTuF7WkbmrselZVl+ePJZPJaHyut+hF7s9m8bNoT1kzK/3mkdvZEk+xjJLZzACETqEPXorszq4SrU9Jqb2+32zttWwD6FjLJCSGmfVJSMIflhSPlx6LaMIx1rpd2+2ROD+OKeTaarrtZBf1Tycm1XXN3eD1C5puohb0uLwq3mNcrY1+z+QBEn0I2mUw+XpblOxaIHn39erlcvmhTtksZgbB+5DjsCOd6dd7IGvJsNN+bgTvmkcn+LgC7XrtraHVd35Q8Duw+nir9KnRfQvbhhx/+ylNPPfWWbYyxXtyWbAM5tfDQ7AWblWX5S3Vd/6LLlopm/+C9qqq+22VjbVub1LmfTCbPl2V5QynlsqVCm9afqXuw3W7fNT3mdu0bkusZkUloBS6rHwmqqrp2dnb2TF3XnzysriiK7282m/dtNzEGdhfzBgJa3JRSz7blU1+uvzKu//eV0+Z9TDWdTj9RVdXPHAnph9vt9r+VUu/1+bk3U2NDyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBFAyEyE+B0CEEieAEKWfIpwEAIQMBEYhZCZIPA7BCAwTgKLxaKQRC4q3GbYVXUljlIWAhAYDwGEbDy5JlIIZEsAIcs2tQQGgfEQQMjGk2sihUC2BBCybFNLYBAYDwGEbDy5JlIIZEsAIcs2tQQGgfEQQMjGk2sihUC2BBCybFNLYBAYDwGEbDy5JlIIZEsAIcs2tQQGgfEQQMjGk2sihUC2BBCybFNLYBAYD4FehGw8eIkUAhBIkYCX0y9SDAyfIACB8RBAyMaTayKFQLYEELJsU0tgEBgPAYRsPLkmUghkSwAhyza1BAaB8RBAyMaTayKFQLYEELJsU0tgEBgPAYRsPLkmUghkSwAhyza1BAaB8RBAyMaTayKFQLYEELJsU0tgEBgPAYRsPLkmUghkSwAhyza1BAaB8RBAyMaTayKFQLYEELJsU0tgEBgPAYRsPLkmUghkS+AntWlOHXz3dAQAAAAASUVORK5CYII=' alt=''>
                </img>
            </div>   
            <div className='head'>
            <h3>Admin</h3>
        </div>
        </div>
<div className='list'>
    <ul>
        <div className='list-1'>
        <div className='logos'>
        <ComputerIcon/>
        </div>
        <Link to={'/admin'}>
        <li className='list-name'>Activity</li></Link>
        </div>
    </ul>
</div>
     </div>

  
    </>
  }
  
  export default Side