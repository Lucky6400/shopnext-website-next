import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { MdAccountCircle } from 'react-icons/md'
import { accountMenuStyle, accountTextStyle } from '../Styles/styles'
import { useRouter } from 'next/router'

const Account = () => {
    const { data: session } = useSession();
    const router = useRouter();
    console.log(router.pathname)
    const path = router.pathname;

    return (
        <div className="z-[100]">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className={accountMenuStyle}>
                        {!session ?
                            <div className={accountTextStyle}><MdAccountCircle />
                                <span className="text-sm">Account</span>
                            </div> :
                            <div className={accountTextStyle}>
                                <img src={session.user.image} className="w-8 h-8 rounded-full" alt="user image" />
                                <span className="text-sm">{session.user.name}</span>
                            </div>
                        }

                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md z-[100] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 z-[100]">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                    onClick={() => path !== "/cart" ? router.push('/cart') : router.push('/')}
                                        className={`${active ? 'bg-red-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                       {path !== "/cart" ? "Go to cart" : "Home"}
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-red-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        My orders
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-red-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Report an issue
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-red-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Help
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    session ? <button
                                        onClick={signOut}
                                        className={`${active ? 'bg-red-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Sign out
                                    </button> :
                                   <button
                                        onClick={signIn}
                                        className={`${active ? 'bg-red-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Sign in
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>

    )
}

export default Account