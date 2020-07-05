import {html2json} from 'html2json';
import {filter, map} from 'lodash';

const parseBody = (content) => {

  const bodyItems = [];
  const switchNode = ({attr, child, node, tag}) => {
    
    node === 'element' && tag !== 'a' &&
      map(child, (item) => switchNode(item));

    if(tag === 'p') {
      let contentText = '';
      map(child, (children) => {
        if(children.node === 'text') {
          contentText = `${contentText}${children.text}`;
        }
        if(children.tag === 'a' && children.attr.class !== 'p-smartembed') {
          
          let text = children.child && children.child.length > 0 ? 
            children.child[0].text : 
            children.attr['aria-label'];

          let attr = '';
          map(children.attr, (value, key) => {
            attr = `${attr} ${key}=${value}`;
          });
          contentText = `${contentText}<a ${attr}>${text}</a>`;
        }
      });
      if(contentText && contentText !== '') {
        bodyItems.push({type: 'Paragraph', value: contentText});
      }
    }

    tag === 'a' && attr.class && attr.class === 'p-smartembed' &&
      bodyItems.push({type: 'Image', value: attr['data-onecms-id']});
      
    if(tag === 'a' && attr.href && !attr.class && attr.href !== '') {
      
      if(attr['href'].indexOf('twitter.com') > -1) {
        bodyItems.push({type: 'Tweet', value: attr['href']});
        
      } else if(attr['href'].indexOf('youtube.com') > -1) {
        bodyItems.push({type: 'Youtube', value: attr['href']});
      }
    }
  };
  // convert html
  const parsed = html2json(content);
  const elements = filter(parsed.child, ({node: 'element'}));

  // parse elements
  map(elements, (item) => switchNode(item));

  return bodyItems;
};
export default parseBody;