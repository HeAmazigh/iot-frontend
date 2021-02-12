/*
 * @Author: ryma.naiatamara 
 * @Date: 2020-02-12 11:23:59 
 * @Last Modified time: 2020-02-12 11:51:36
 * 
 *  Copyright (c) 2019 Red Alert Labs S.A.S.
 *  All Rights Reserved.
 *  This software is the confidential and proprietary information of
 *  Red Alert Labs S.A.S. (Confidential Information). You shall not
 *  disclose such Confidential Information and shall use it only in
 *  accordance with the terms of the license agreement you entered
 *  into with Red Alert Labs S.A.S.
 *  RED ALERT LABS S.A.S. MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE
 *  SUITABILITY OF THE SOFTWARE, EITHER EXPRESS OR IMPLIED, INCLUDING
 *  BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
 *  FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. RED ALERT LABS S.A.S. SHALL
 *  NOT BE LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING,
 *  MODIFYING OR DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
 * 
 */

export default {
    items: [
        {
            id: 'landing',
            title: 'Landing',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'landing',
                    title: 'Landing',
                    type: 'item',
                    url: '/landing',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'Project',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'basic',
                    title: 'Manage Project',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'button',
                            title: 'List Project',
                            type: 'item',
                            url: '/sample-page'
                        },
                        {
                            id: 'badges',
                            title: 'Results',
                            type: 'item',
                            url: '/sample-page'
                        },
                        
                    ]
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'Synthesis',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Manage Synthesis',
                    type: 'item',
                    url: '/sample-page',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'bootstrap',
                    title: 'General',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/sample-page'
                }
            ]
        },
 
        {
            id: 'pages',
            title: 'Documents',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'All Documents',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    badge: {
                        title: 'New',
                        type: 'label-danger'
                    },
                    children: [
                        {
                            id: 'signup-1',
                            title: 'All Quotation',
                            type: 'item',
                            url: '/sample-page',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'All NDA',
                            type: 'item',
                            url: '/sample-page',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },

                {
                    id: 'sample-page',
                    title: 'Send Message',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'docs',
                    title: 'Documentation',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-help-circle'
                },
                {
                    id: 'menu-level',
                    title: 'Settings',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Profile',
                            type: 'item',
                            url: '#',
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'My Account',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Menu Level 2.1',
                                    type: 'item',
                                    url: '#',
                                },
                                {
                                    id: 'menu-level-2.2',
                                    title: 'Menu Level 2.2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Menu Level 3.1',
                                            type: 'item',
                                            url: '#',
                                        },
                                        {
                                            id: 'menu-level-3.2',
                                            title: 'Menu Level 3.2',
                                            type: 'item',
                                            url: '#',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'disabled-menu',
                    title: 'Sign Out',
                    type: 'item',
                    url: '#',
                    classes: 'nav-item disabled',
                    icon: 'feather icon-power'
                },
                           ]
        }
    ],

  
}




