import React from 'react';
import typeId from "./set_type_id.json";
import Para from './Para';
import Table from './Table';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFire, faStar } from "@fortawesome/free-solid-svg-icons";

function Context({type, icon}) {
  const icons = {
    star: <FontAwesomeIcon className='icon-star' icon={faStar} />,
    heart: <FontAwesomeIcon className="icon-heart" icon={faHeart} />,
    fire: <FontAwesomeIcon className='icon-fire' icon={faFire} />
  }
  const comps = {
    1: <Para icon={icons[icon]}></Para>,
    2: <Table></Table>
  }

  return (
    <>
      {comps[typeId[type]]}
    </>
  )
}

export default Context