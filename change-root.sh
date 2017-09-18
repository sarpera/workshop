#!/bin/bash

YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}

                                                                                                                :lc'             ':c;
   ;lxkOOOkdl:'                                                                  ;xkkkkkkkkkxdl,                :oc'             :KW0;
 ,xXWNKOO0XNWNo                                                                  lNMN0OOOOO0XWWXd'                               cXM0;
 dWMXo'   ';ll,     ':loool;'   :ll,      'co:    ,cloolc;     ,ll; ,clool:'     lNMO,      'dNMXc   :lc' ;cl,  :lc'     ;clool;'cXM0;    ,:lool;',cl:      ;clool:,       ;cooolc,
 oNMNk:'          ;xKNXK0KXN0l' dNWk'     xWNd  ckXNK00KNXOc   oWMKkKNXNWWN0c    lNMO,      'oNWO;  ,OMNOOXNKc ,0MXc   cONWNXKXX0ONM0;  ;xKWNK0KK00WMO'  'lOXNK00XNXx;   ;kNNK0KXN0c
 'oKWWNKOxoc,    cKWKo,  ';xNNd 'kWNo    lXWk' dNWOc'  'cOWXc  oNMW0o:,;ckNMK:   lNMNOkkkkkOKNNk;   ,OMMNOl:,  ,0MXc  oNMXd:'',:xXMM0; ;0WXx;' ';dXMMO' 'xWNk:'  ,lKW0;  xWWk,  ,::'
   ':oxOKNWWXk: ,OMWOlcccccdKM0; ;0WK:  ;0W0; :KMNxccccccxNMk' oWM0;     ,0MNl   lNMN0OOOOOO0XNKd,  ,OMWx'     ,0MXc ;0MNl       dNM0; dWWd       dWMO' lNMKoccccclkWWo  cKWNOxoc,
         ;l0MM0;;0MWX00000000Kk;  cXWO,'xWXl  cXMWK0000000K0d' oWMk'     'kMNl   lNMO;       ;kWWk' ,OMNl      ,0MXc :KMK:       cXM0; dWWd       dWMO' dWMNK000000000l   ;lxOKNWXk:
,dxc,     'xWMK:'xWWO:'    ';,     oNNxdXNd   ,OWNx,     ,;'   oWMk'     'kMNl   lNMO,       'xWM0, ,OMXc      ,0MXc ,OWWx'     ,kWM0; :KMKo'   'lKMMO' :KMXo'    ',,'    '   ';xNMO,
c0WWX0kxdx0NWXo  ,xNWKxolldOKx'    'kWWWWk'    :ONN0dllld00l   oWMk'     'kMNl   lNMXkddddddkKWWXl  ,OMXc      ,0MXc  ;OWW0xoloxKNWM0;  :ONNKOkOKKKWMO'  cKWNkollox0O:  ,k0kolclkNWx'
 'cdk0KKKK0ko;     ;ok0KKK0ko;      ;kKKk;      'cdOKKKKOxl,   c0Kd      'dK0c   c0KKKKKKKKK0Oko;   'dKO:      ,xKO:   'cx0KXK0kooOKx,    ;ldddoc;dNMk'   ,lx0KKKKOxc'   cdO0KKK0kl'
      ''''             '''            ''             ''         ''         ''     ''''''''''          '          ''        ' '     '            'lKWXl        ''''           '''
                                                                                                                                        :0NKOkkOKNNOc
                                                                                                                                         ,codxxxdl;

${NC}"



read -p 'source folder: ' source_folder

PYTHON_CODE=$(cat <<END
# python code starts here
import sys, json

import re
with open ('.angular-cli.json', 'r' ) as f:
    content = f.read()
content_new = re.sub('"root": ".*"', '"root": "$source_folder"', content, flags = re.M)
f.close

with open('.angular-cli.json', 'w') as file:
  file.write(content_new)

# python code ends here
END
)

# python code eval
result="$(python3 -c "$PYTHON_CODE")"

echo -e "${YELLOW}Done! Serving the app from folder: ${BLUE}$source_folder ${NC}"

ng serve

