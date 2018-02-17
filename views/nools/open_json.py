import json
import sys

with open('parks.json', 'r') as f:
    array_parks = json.load(f)
with open('bar.json', 'r') as f:
    array_bar = json.load(f)
with open('marche.json', 'r') as f:
    array_marche = json.load(f)
with open('point_interet.json', 'r') as f:
    array_point_interet = json.load(f)
with open('resto.json', 'r') as f:
    array_resto = json.load(f)


weather_type = []
park_element = []
bar_element = []
resto_element = []
marche_element = []
point_interet_element = []
list_places = []
def array_data(array=[], element=[], tp = '', date_in = '', heure_in = ''):
    #print("-----")
    #print(tp)
    
    meteo_in = ''
    for ar in array:
        
        list_val = ar.get('list')
        city_val = ar.get('city')
        #print('city_val : ', city_val)
        city_name = city_val.get('name')
        #print(city_name)
        formatted_address_val = ar.get('formatted_address')
        name_val = ar.get('name')
        type_name = ar.get('types')
        #print(type_name)
        element.append([name_val, formatted_address_val, type_name])
    
        """
        print('address : ', formatted_address_val)
        print('name : ', name_val)
        print("*")
        """

        for lst in list_val:
            get_sys = lst.get('dt_txt')
            
            get_weather = lst.get('weather')
            if get_sys.split(" ")[0] == date_in and get_sys.split(" ")[1] == heure_in:
                #print(name_val, " - ", type_name[0:2], " - ", get_weather[0].get('main'))
                #print(tp, name_val.encode('ascii','ignore'), get_weather[0].get('main').encode('ascii','ignore'))
                print(tp+" "+name_val.encode('ascii','ignore'))
                list_places.append([name_val, tp, get_weather[0].get('main')])
            for g in get_weather:
                #print(g.get('main'), '-', g.get('description'))
                weather_type.append([g.get('main'), g.get('description')])
        break
    return element

def affiche(element):
    #w = ""
    for el in element:
        ww = el[0].replace('u','')+" "+ el[2].replace('u','')
        print(el[0], el[1], el[2])
        print(ww)
        #w = ""
        #if 'supermarket' in el[2] or 'store' in el[2]:
            #print(el[2])

"""
date_in = '2018-02-13'

heure_in = '15:00:00'
print(" DATE : ", date_in," HEURE : ", heure_in)
"""


date_in = sys.argv[2]
heure_in = sys.argv[3]

park_element = array_data(array_parks, park_element, 'park', date_in, heure_in)

#bar_element = array_data(array_bar, bar_element, 'bar', date_in, heure_in)
resto_element = array_data(array_resto, resto_element, 'restaurant', date_in, heure_in)
marche_element = array_data(array_marche, marche_element, 'supermarket', date_in, heure_in)
point_interet_element = array_data(array_point_interet, point_interet_element, 'point_of_interest', date_in, heure_in)

#affiche(list_places)

#print(len(park_element), len(bar_element), len(resto_element), len(marche_element), len(point_interet_element))

#affiche(marche_element)
#print()
#affiche(park_element)
#print()
#affiche(resto_element)

"""
weather = []
for w in range(len(weather_type)):
    if weather_type[w] not in weather:
        weather.append(weather_type[w])
print()
import numpy as np
for we in weather:
    print(we)
"""


