import sys

import xml.etree.ElementTree as ET


xmldoc = ET.parse('rule_weather.xml')

asserts = xmldoc.getroot()

c = 0
vr = []


for implies in asserts:
    for eif in implies:
        if eif.tag == 'if':
            for atom in eif:
                for element in atom:
                    if element.text == sys.argv[1]:
                        c = 1
        if eif.tag == 'then':
            if c == 1:
                for atom in eif:       
                    for element in atom:
                        vr.append(element.text)
                c = 0

for v in vr:
    print(v)                 

