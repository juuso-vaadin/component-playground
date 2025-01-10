import { Button } from '@vaadin/react-components/Button.js';
import { RadioGroup } from '@vaadin/react-components/RadioGroup.js';
import { RadioButton } from '@vaadin/react-components/RadioButton.js';
import { CheckboxGroup } from '@vaadin/react-components/CheckboxGroup.js';
import { Checkbox } from '@vaadin/react-components/Checkbox.js';
import { DateTimePicker } from '@vaadin/react-components/DateTimePicker.js';
import { useState } from 'react';
import { Grid } from '@vaadin/react-components/Grid.js';
import { GridColumn } from '@vaadin/react-components/GridColumn.js';
import { GridSelectionColumn } from '@vaadin/react-components/GridSelectionColumn';
import { ComboBox } from '@vaadin/react-components/ComboBox';
import { MessageList, MessageListItem } from '@vaadin/react-components/MessageList';
import { MessageInput } from '@vaadin/react-components/MessageInput';
import { TextField } from '@vaadin/react-components/TextField.js';
import { Icon } from '@vaadin/react-components/Icon';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';
import { Upload } from '@vaadin/react-components/Upload';
import { MultiSelectComboBox } from '@vaadin/react-components/MultiSelectComboBox';
import { Tabs } from '@vaadin/react-components/Tabs';
import { Tab } from '@vaadin/react-components/Tab';
import { RichTextEditor } from '@vaadin/react-components-pro';
import { Accordion, AccordionPanel, AvatarGroup, Item, ListBox, LoginForm, MenuBar, MenuBarItem, ProgressBar, SplitLayout } from '@vaadin/react-components';
import users from 'Frontend/data/users.json';
import { User } from 'Frontend/data/types';
import { ViewConfig } from '@vaadin/hilla-file-router/types.js';

export const DRAWER_EVENT = 'applayout-drawer';
export const config: ViewConfig = { menu: { order: 1, icon: 'line-awesome/svg/react.svg' }, title: 'Hilla' };

type DataPoint = {
    x: number;
    y: number;
}

const menuBarItems: MenuBarItem[] = [{
    text: "Actions",
    children: [
        { text: "Edit" },
        { text: "Duplicate" },
        { component: "hr" },
        { text: "Archive" },
        {
            text: "More", children: [
                { text: "Move to Project…" },
                { text: "Move to Folder…" },
                { component: "hr" },
                { text: "Advanced Options…" }
            ]
        },
        { component: "hr" },
        { text: "Share" },
        { text: "Add to Favorites" },
        { component: "hr" },
        { text: "Delete", theme: "error" },
    ]
}];

export default function HillaView() {
    const people = users.map(p => ({ ...p, name: `${p.firstName} ${p.lastName}` }));
    const [developerProductivity, setDeveloperProductivity] = useState<DataPoint[]>([]);
    const [counter, setCounter] = useState(0);

    const messages: MessageListItem[] = [
        {
            userName: 'Matt Mambo',
            text: 'Nature does not hurry, yet everything gets accomplished.',
            time: '2 minutes ago',
            userColorIndex: 1
        },
        {
            userName: 'Lindsey Listy',
            text: 'Using your talent, hobby or profession in a way that makes you contribute with something good to this world is truly the way to go.',
            time: 'just now',
            userColorIndex: 2
        }

    ];

    return (<>
        <Button className="drawer-toggle" theme="primary icon" onClick={() => {
            document.documentElement.dispatchEvent(new CustomEvent(DRAWER_EVENT));
        }} aria-label="toggle navigation drawer">
            <Icon src="/themes/demo/icons/menu.svg" />
        </Button>
        <div className="components-view">
            <div className="grid">
                <div className='View component'>
                    <div className='flex flex-wrap gap-s'>
                        <Button theme='primary' className='flex-auto'>Save</Button>
                        <Button className='flex-auto'>Cancel</Button>
                    </div>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/button"><span className="sr-only">Documentation for </span>Button<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component flex-col wide gap-s'>

                    <div className="flex flex-wrap gap-s justify-center">
                        <span {...{ theme: "badge" }}>Default</span>
                        <span {...{ theme: "badge accent" }}>Accent</span>
                        <span {...{ theme: "badge success" }}>Success</span>
                        <span {...{ theme: "badge error" }}>Error</span>
                        <span {...{ theme: "badge warning" }}>Warning</span>
                    </div>

                    <div className="flex flex-wrap gap-s justify-center">
                        <span {...{ theme: "primary badge" }}>Default</span>
                        <span {...{ theme: "primary badge accent" }}>Accent</span>
                        <span {...{ theme: "primary badge success" }}>Success</span>
                        <span {...{ theme: "primary badge error" }}>Error</span>
                        <span {...{ theme: "primary badge warning" }}>Warning</span>
                    </div>

                    <div className="flex flex-wrap gap-s justify-center">
                        <span {...{ theme: "primary badge" }}><Icon icon="lumo:checkmark" /></span>
                        <span {...{ theme: "primary badge accent" }}><Icon icon="lumo:checkmark" /></span>
                        <span {...{ theme: "primary badge success" }}><Icon icon="lumo:checkmark" /></span>
                        <span {...{ theme: "primary badge error" }}><Icon icon="lumo:checkmark" /></span>
                        <span {...{ theme: "primary badge warning" }}><Icon icon="lumo:checkmark" /></span>
                    </div>

                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/badge"><span className="sr-only">Documentation for </span>Badge<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component'>
                    <RadioGroup theme='vertical' value='1'>
                        <RadioButton label='Option 1' value='1' />
                        <RadioButton label='Option 2' value='2' />
                        <RadioButton label='Option 3' value='3' />
                    </RadioGroup>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/radio-button"><span className="sr-only">Documentation for </span>Radio Button<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component'>
                    <MenuBar items={menuBarItems} />
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/menu-bar"><span className="sr-only">Documentation for </span>Menu Bar<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                {/* TODO noAutofocus doesn't work */}
                <div className='View component tall wide'>
                    <LoginForm noAutofocus no-autofocus />
                </div>

                <div className='View component'>
                    <AvatarGroup maxItemsVisible={5} className="w-auto" items={people.map((user: User) => { return { 'name': user.firstName + ' ' + user.lastName, 'colorIndex': user.id } })}></AvatarGroup>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/avatar"><span className="sr-only">Documentation for </span>Avatar<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component wide'>
                    <DateTimePicker value={new Date().toISOString().slice(0, 16)}></DateTimePicker>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/date-time-picker"><span className="sr-only">Documentation for </span>Date Time Picker<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component wide'>
                    <Tabs>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </Tabs>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/tabs"><span className="sr-only">Documentation for </span>Tabs<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component'>
                    <CheckboxGroup theme='vertical' value={['1', '3']}>
                        <Checkbox label='Option 1' value='1' />
                        <Checkbox label='Option 2' value='2' />
                        <Checkbox label='Option 3' value='3' />
                    </CheckboxGroup>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/checkbox"><span className="sr-only">Documentation for </span>Checkbox<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component widest tall no-padding'>
                    <Grid items={people} selectedItems={people.slice(3, 6)} className='h-full' theme="no-border">
                        <GridSelectionColumn frozen />
                        <GridColumn path='firstName' frozen />
                        <GridColumn path='lastName' frozen />
                        <GridColumn path='email' autoWidth />
                        <GridColumn path='createdAt' autoWidth />
                    </Grid>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/grid"><span className="sr-only">Documentation for </span>Grid<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component'>
                    <ComboBox
                        items={people}
                        itemLabelPath='name'
                        itemValuePath='id'
                        label='People' value={'' + people[1]?.id}
                    />
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/combo-box"><span className="sr-only">Documentation for </span>Combo Box<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component'>
                    <ProgressBar value={0.5} />
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/progress-bar"><span className="sr-only">Documentation for </span>Progress Bar<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component wide tall'>
                    <Accordion>
                        <AccordionPanel summary="Personal information">
                            {/* TODO only the first child is considered as the panel content. Other children get aria-hidden=true */}
                            <div className="pb-m">
                                <div>Sophia Williams</div>
                                <div>sophia.williams@company.com</div>
                                <div>(501) 555-9128</div>
                            </div>
                        </AccordionPanel>

                        <AccordionPanel summary="Billing address">
                            <div className="pb-m">
                                <div>4027 Amber Lake Canyon</div>
                                <div>72333-5884 Cozy Nook</div>
                                <div>Arkansas</div>
                            </div>
                        </AccordionPanel>

                        <AccordionPanel summary="Payment">
                            <div className="pb-m">
                                <div>MasterCard</div>
                                <div>1234 5678 9012 3456</div>
                                <div>Expires 06/21</div>
                            </div>
                        </AccordionPanel>
                    </Accordion>

                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/accordion"><span className="sr-only">Documentation for </span>Accordion<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className="View component widest">
                    <div className="color-scales">
                        <div className="flex color-scale tint">
                            <div style={{ backgroundColor: 'var(--lumo-tint-5pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-tint-10pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-tint-20pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-tint-30pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-tint-40pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-tint-50pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-tint-60pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-tint-70pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-tint-80pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-tint-90pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-tint)' }}></div>
                        </div>
                        <div className="flex color-scale shade">
                            <div style={{ backgroundColor: 'var(--lumo-shade-5pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-shade-10pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-shade-20pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-shade-30pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-shade-40pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-shade-50pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-shade-60pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-shade-70pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-shade-80pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-shade-90pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-shade)' }}></div>
                        </div>

                        <div className="flex color-scale accents">
                            <div style={{ backgroundColor: 'var(--accent-10pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--vaadin-focus-ring-color)' }}></div>
                            <div style={{ backgroundColor: 'var(--accent)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-success-color-10pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-success-color-50pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-success-color)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-warning-color-10pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-warning-color)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-error-color-10pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-error-color-50pct)' }}></div>
                            <div style={{ backgroundColor: 'var(--lumo-error-color)' }}></div>
                        </div>
                    </div>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/styling/lumo/lumo-style-properties/color"><span className="sr-only">Documentation for </span>Colors<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className="View component tall">
                    <div className="type-scale">
                        <h1>Heading</h1>
                        <h2>Heading</h2>
                        <h3>Heading</h3>
                        <h4>Heading</h4>
                        <h5>Heading</h5>
                        <h6>Heading</h6>
                        <p className="mb-0">Paragraph</p>
                        <p className="m-0 text-s text-secondary">Small text</p>
                    </div>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/styling/lumo/lumo-style-properties/typography"><span className="sr-only">Documentation for </span>Typography<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component tall wide flex-col gap-m'>
                    <MessageList items={messages} />
                    <MessageInput className='w-full' />
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/message-list"><span className="sr-only">Documentation for </span>Message List<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component wide gap-m'>
                    <TextField
                        clearButtonVisible
                        value='John Doe'>
                        <Icon icon='lumo:search' slot='prefix' />
                    </TextField>
                    <TextField label='Name field' placeholder='Name'></TextField>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/text-field"><span className="sr-only">Documentation for </span>Text Field<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className="View component gap-m">
                    <div className="flex gap-m">
                        <Icon icon="lumo:user" />
                        <Icon icon="lumo:search" />
                        <Icon icon="lumo:plus" />
                    </div>
                    <div className="flex gap-m">
                        <Icon icon="lumo:minus" />
                        <Icon icon="lumo:menu" />
                        <Icon icon="lumo:clock" />
                    </div>
                    <div className="flex gap-m">
                        <Icon icon="lumo:reload" />
                        <Icon icon="lumo:bell" />
                        <Icon icon="lumo:arrow-right" />
                    </div>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/icons"><span className="sr-only">Documentation for </span>Icons<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component wide'>
                    <Upload />
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/upload"><span className="sr-only">Documentation for </span>Upload<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component wide'>
                    <MultiSelectComboBox
                        className='w-full'
                        items={people}
                        itemLabelPath='name'
                        itemValuePath='id'
                        selectedItems={people.slice(3, 5)}
                    />
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/multi-select-combo-box"><span className="sr-only">Documentation for </span>Multi-Select Combo Box<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component'>
                    <SplitLayout className="h-full w-full">
                        <div></div>
                        <div></div>
                    </SplitLayout>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/split-layout"><span className="sr-only">Documentation for </span>Split Layout<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component widest no-padding tall'>
                    <RichTextEditor
                        theme="no-border"
                        className="h-full"
                        htmlValue={`
            <h1>Rich Text Editor</h1>
            <p>This is a rich text editor</p>
          `}
                    />
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/rich-text-editor"><span className="sr-only">Documentation for </span>Rich Text Editor<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>

                <div className='View component'>
                    <ListBox multiple selectedValues={[0]}>
                        <Item>Option 1</Item>
                        <Item>Option 2</Item>
                        <Item>Option 3</Item>
                    </ListBox>
                    <a className="docs" target="_blank" href="https://vaadin.com/docs/components/list-box"><span className="sr-only">Documentation for </span>List Box<Icon src="/themes/demo/icons/external-link.svg" /></a>
                </div>


                {/* TODO Side Nav, Select, Map?, Spreadsheet?, Icons? */}
            </div>
        </div>
    </>);
}
