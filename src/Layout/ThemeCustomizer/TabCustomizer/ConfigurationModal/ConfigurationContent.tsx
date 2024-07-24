import React from 'react'
import { useSelector } from 'react-redux';
import ConfigDB from '../../../../Config/ThemeConfig'
import { RootState } from '../../../../ReduxToolkit/Store';

export default function ConfigurationContent() {
    const { layout_type, sideBarIconType } = useSelector((state: RootState) => state.themeCustomizer);

    return (
        <pre>
            <code>
                <div> {"export const ConfigDB ="}&#123;</div>
                <div> {"settings"}&#58; &#123;</div>
                <div>
                    {"layout_type"}&#58; '{layout_type}',
                </div>
                <div>
                    {"layout_class"}&#58; '{ConfigDB.settings.layout_class}',
                </div>
                <div> {"sidebar"}&#58; &#123;</div>
                <div>
                    {"type"}&#58; '{ConfigDB.settings.sidebar.type}',
                </div>
                <div>
                    {"iconType"}&#58; '{sideBarIconType}',
                </div>
                <div> &#125;,</div>
                <div>
                    {"sidebar_setting"}&#58; '{ConfigDB.settings.sidebar_setting}',
                </div>
                <div> &#125;,</div>
                <div> {"color"}&#58; &#123;</div>
                <div>
                    {"primary_color"}&#58; '{ConfigDB.color.primary_color}',
                </div>
                <div>
                    {"secondary_color"}&#58; '{ConfigDB.color.secondary_color}',
                </div>
                <div>
                    {"mix_background_layout"}&#58; '{ConfigDB.color.mix_background_layout}',
                </div>
                <div> &#125;,</div>
                <div>
                    {"router_animation"}&#58; '{ConfigDB.router_animation}'
                </div>
                <div> &#125;</div>
            </code>
        </pre>
    )
}
