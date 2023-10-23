// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/data`
  | `/info`
  | `/login`
  | `/memberships`
  | `/payments`
  | `/restaurants`
  | `/settings`
  | `/settings/invoice`
  | `/settings/user`
  | `/signup`
  | `/supermarkets`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
