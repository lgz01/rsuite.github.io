/*! Last update: Sat Aug 13 2016 16:48:11 GMT+0800 (CST) */
webpackJsonp([4],{363:function(t,o,n){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var r=n(2),d=e(r),l=n(253),a=n(337),u=e(a),p=n(334),i={basic:"var instance = (\n    <Form >\n        <FormGroup controlId='username'>\n            <ControlLabel>Text</ControlLabel>\n            <FormControl  type='text'  />\n            <HelpBlock>Required</HelpBlock>\n        </FormGroup>\n        <FormGroup controlId='email'>\n            <ControlLabel>Email</ControlLabel>\n            <FormControl  type='email'  />\n        </FormGroup>\n        <FormGroup controlId='number'>\n            <ControlLabel>Number</ControlLabel>\n            <FormControl  type='number'  />\n        </FormGroup>\n        <FormGroup controlId='file'>\n            <ControlLabel>File</ControlLabel>\n            <FormControl  type='file' />\n        </FormGroup>\n\n        <FormGroup controlId='select'>\n            <ControlLabel>Select</ControlLabel>\n            <FormControl componentClass='select'>\n                <option value='A'>Option A</option>\n                <option value='B'>Option B</option>\n                <option value='C'>Option C</option>\n                <option value='D'>Option D</option>\n            </FormControl>\n        </FormGroup>\n\n        <FormGroup controlId='textarea'>\n            <ControlLabel>Textarea</ControlLabel>\n            <FormControl componentClass=\"textarea\" />\n        </FormGroup>\n\n        <FormGroup controlId='checkbox'>\n            <Checkbox checked > Checkbox</Checkbox>\n        </FormGroup>\n\n        <FormGroup>\n            <Radio> Radio</Radio>\n        </FormGroup>\n\n        <FormGroup controlId='checkboxList'>\n            <ControlLabel>CheckboxList</ControlLabel>\n            <CheckboxList name=\"checkboxList\">\n                <Checkbox checked>Item A</Checkbox>\n                <Checkbox>Item B</Checkbox>\n                <Checkbox>Item C</Checkbox>\n                <Checkbox disabled>Item D</Checkbox>\n            </CheckboxList>\n        </FormGroup>\n\n        <FormGroup controlId='radioList'>\n            <ControlLabel>RadioList</ControlLabel>\n            <RadioList name=\"radioList\" value=\"C\">\n                <Radio value=\"A\">Item A</Radio>\n                <Radio value=\"B\">Item B</Radio>\n                <Radio value=\"C\">Item C</Radio>\n                <Radio value=\"D\" disabled>Item D</Radio>\n            </RadioList>\n        </FormGroup>\n\n\n        <FormGroup controlId='checkboxList' >\n            <ControlLabel>CheckboxList inline</ControlLabel>\n            <CheckboxList name=\"checkboxList\" inline>\n                <Checkbox checked>Item A</Checkbox>\n                <Checkbox>Item B</Checkbox>\n                <Checkbox>Item C</Checkbox>\n                <Checkbox disabled>Item D</Checkbox>\n            </CheckboxList>\n        </FormGroup>\n\n        <FormGroup controlId='radioList'>\n            <ControlLabel>RadioList inline</ControlLabel>\n            <RadioList name=\"radioList\" value=\"C\" inline>\n                <Radio value=\"A\">Item A</Radio>\n                <Radio value=\"B\">Item B</Radio>\n                <Radio value=\"C\">Item C</Radio>\n                <Radio value=\"D\" disabled>Item D</Radio>\n            </RadioList>\n        </FormGroup>\n    </Form>\n);\nReactDOM.render(instance, mountNode);\n",inputGroup:'var instance = (\n    <Form >\n        <FormGroup>\n            <InputGroup>\n                <InputGroup.Addon> @</InputGroup.Addon>\n                <FormControl type="text" />\n            </InputGroup>\n        </FormGroup>\n        <FormGroup>\n            <InputGroup>\n                <FormControl type="text" />\n                <InputGroup.Addon>.00</InputGroup.Addon>\n            </InputGroup>\n        </FormGroup>\n        <FormGroup>\n            <InputGroup>\n                <InputGroup.Addon>$</InputGroup.Addon>\n                <FormControl type="text" />\n                <InputGroup.Addon>.00</InputGroup.Addon>\n            </InputGroup>\n        </FormGroup>\n\n        <FormGroup>\n            <InputGroup>\n                <FormControl type="text" />\n                <InputGroup.Addon>至</InputGroup.Addon>\n                <FormControl type="text" />\n            </InputGroup>\n        </FormGroup>\n\n        <FormGroup>\n            <InputGroup inside>\n                <FormControl type="text" />\n                <InputGroup.Addon>\n                    <IconFont icon="search" />\n                </InputGroup.Addon>\n            </InputGroup>\n        </FormGroup>\n\n        <FormGroup>\n            <InputGroup inside>\n                <InputGroup.Addon>\n                    <IconFont icon="avatar" classPrefix="icon" />\n                </InputGroup.Addon>\n                <FormControl type="text" />\n            </InputGroup>\n        </FormGroup>\n\n        <FormGroup>\n            <InputGroup>\n                <InputGroup.Button>\n                    <Button>Before</Button>\n                </InputGroup.Button>\n                <FormControl type="text" />\n            </InputGroup>\n        </FormGroup>\n        <FormGroup>\n            <InputGroup>\n                <FormControl type="text" />\n                <Dropdown shape="default" activeKey="B" select componentClass={InputGroup.Button}>\n                    <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>\n                    <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>\n                    <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>\n                </Dropdown>\n            </InputGroup>\n        </FormGroup>\n\n        <FormGroup>\n            <InputGroup>\n                <InputGroup.Addon>\n                    <input type="radio" aria-label="..." />\n                </InputGroup.Addon>\n                <FormControl type="text" />\n            </InputGroup>\n        </FormGroup>\n        <FormGroup>\n            <InputGroup>\n                <InputGroup.Addon>\n                    <input type="checkbox" aria-label="..." />\n                </InputGroup.Addon>\n                <FormControl type="text" />\n            </InputGroup>\n        </FormGroup>\n    </Form>\n);\nReactDOM.render(instance, mountNode);\n'};o["default"]=d["default"].createClass({displayName:"controls",render:function(){return d["default"].createElement(l.Col,{md:9,sm:12},d["default"].createElement("h1",{className:"page-header"},"支持的表单控件",d["default"].createElement("span",{className:"page-header-en"},d["default"].createElement("code",null,"Form"),"、",d["default"].createElement("code",null,"FormGroup"),"、",d["default"].createElement("code",null,"ControlLabel"),"、",d["default"].createElement("code",null,"Checkbox"),"、",d["default"].createElement("code",null,"CheckboxList"),"、",d["default"].createElement("code",null,"Radio"),"、",d["default"].createElement("code",null,"RadioList"),"、",d["default"].createElement("code",null,"HelpBlock"))),d["default"].createElement("h3",null,"默认样式"),d["default"].createElement(u["default"],{code:i.basic}),d["default"].createElement("h3",null,"InputGroup"),d["default"].createElement(u["default"],{code:i.inputGroup}),d["default"].createElement("h3",null,"组件属性"),d["default"].createElement(p.Markdown,null,n(364)))}})},364:function(t,o){t.exports="<h1 id=formgroup>FormGroup</h1> <table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>controlId</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>validationState</td> <td>one of:<code>&#39;success&#39;</code>, <code>&#39;warning&#39;</code>, <code>&#39;error&#39;</code></td> <td></td> <td></td> </tr> </tbody> </table> <h1 id=controllabel>ControlLabel</h1> <table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>htmlFor</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>srOnly</td> <td>boolean</td> <td>false</td> <td></td> </tr> </tbody> </table> <h1 id=formcontrol>FormControl</h1> <table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>componentClass</td> <td>elementType</td> <td></td> <td></td> </tr> <tr> <td>type</td> <td>string</td> <td>false</td> <td></td> </tr> <tr> <td>id</td> <td>string</td> <td></td> <td></td> </tr> </tbody> </table> <h1 id=checkbox-radio>Checkbox、Radio</h1> <table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>id</td> <td>elementType</td> <td></td> <td></td> </tr> <tr> <td>name</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>inline</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>title</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>disabled</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>checked</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>onClick</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onChange</td> <td>function</td> <td></td> <td></td> </tr> </tbody> </table> <h1 id=checkboxlist-radiolist>CheckboxList、RadioList</h1> <table> <thead> <tr> <th>性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>name</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>inline</td> <td>boolean</td> <td>false</td> <td></td> </tr> </tbody> </table>"}});